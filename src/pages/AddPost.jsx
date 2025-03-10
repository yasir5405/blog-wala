import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import { toast } from "react-toastify";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Select } from "../components";

const AddPost = () => {
  const { register, handleSubmit, control } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const addPost = async (data) => {
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
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-[10px] px-4">
      <form
        className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full space-y-4"
        onSubmit={handleSubmit(addPost)}
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Create a New Post
        </h2>

        <Input label="Title" {...register("title", { required: true })} />

        {/* RTE */}
        <Controller
          name="content"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input label="content" type="rte" {...field} />
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
          className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 transition"
          type="submit"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default AddPost;
