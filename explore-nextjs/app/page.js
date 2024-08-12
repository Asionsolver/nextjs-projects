export const metadata = {
  title: "Home Page",
  description: "This is the home page.",
};

export default function Home() {
  return (
    <div>
      <h1 className=' text-4xl text-purple-600'>Home Page</h1>
      <h1 className="text-2xl mt-5">Hello, Next.js!</h1>
      <p className="mt-4">
        This is the home page. You can customize your home page here. You can also add new features or remove existing ones. 
      </p>
    </div>
  );
}
