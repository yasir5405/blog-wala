import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import { toast } from "react-toastify";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Select } from "../components";
import { useState } from "react";

const AddPost = () => {
  const { register, handleSubmit, control } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const addPost = async (data) => {
    setLoading(true);
    try {
      const file = await service.uploadImage(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const post = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (post) {
          navigate(`/posts/${post.$id}`);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[65px] flex items-center justify-center min-h-screen pt-[10px] px-4 bg-zinc-950 text-white">
      <form
        className="bg-zinc-800/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 max-w-3xl w-full space-y-4"
        onSubmit={handleSubmit(addPost)}
      >
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center">
          Create a New Post
        </h2>

        <Input label="Title" {...register("title", { required: true })} />

        {/* RTE */}
        <Controller
          name="content"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input label="Content" type="rte" {...field} />
          )}
        />

        <Select
          label="Status"
          {...register("status", { required: true })}
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ]}
        />

        <Input
          label="Featured Image"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: true })}
        />

        <button
          className="w-full bg-white text-black font-semibold py-3 rounded-lg shadow-md focus:ring-4 focus:ring-zinc-300 transition-all ease-linear duration-200 hover:bg-zinc-200"
          type="submit"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
