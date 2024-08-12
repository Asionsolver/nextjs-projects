export const metadata = {
  title: "Settings Page",
  description: "This is the Settings page.",
};

const Settings = () => {
  // console.log('Settings page rendered');
  return (
    <div className='p-4'>

      <h1 className=' text-4xl text-orange-600'>Settings Page</h1>
      <h1 className="text-2xl mt-5">Hello, Next.js!</h1>
      <p className="mt-4">
        This is the settings page. You can customize your settings here. You can also add new settings or remove existing ones. 
      </p>
    </div>
  );
};

export default Settings;
