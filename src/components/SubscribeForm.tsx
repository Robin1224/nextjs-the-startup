import Button from "./utility/Button";

interface Props {}
const SubscribeForm = (props: Props) => {
  const postEmail = async (formData: FormData) => {
    "use server";

    const rawFormData = {
      email: formData.get("email"),
    };

    // mutate data
    // revalidate cache
  };

  return (
    <div className="flex flex-col mt-11">
      <span>Want to get a daily forecast?</span>

      <form action={postEmail} className="flex flex-col">
        <input
          type="text"
          name="email"
          className="p-3 mt-6 text-center placeholder:text-black-900 rounded-full border border-black-900"
          placeholder="Enter your e-mailaddress"
        />
        <Button type="submit" content="Submit" className="mt-6"/>
      </form>
    </div>
  );
};
export default SubscribeForm;
