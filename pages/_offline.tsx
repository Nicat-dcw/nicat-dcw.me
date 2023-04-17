import type { NextPage } from 'next'
const Offline: NextPage = () => {
      const handleRefresh = () => {
        window.location.reload(false);
    }
  
return (
    <>
    <div className="flex justify-center fixed h-full w-full">
    <div>
    <h1 className="text-cyan-700 text-left text-5xl font-extrabold">You're Offline!</h1>
    <p className="text-gray-600 text-left pt-2">Try enable your wifi or ethernet to re-access this app</p>
    <div className="pt-4 linear mt-4 flex justify-center items-center justify-center rounded-xl bg-cyan-500 px-2 py-1 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        <button
          onClick={handleRefresh}
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8 pb-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        </button>
            
        </div>
       
    </div>
    </div>
        
    </>
)
}
export default Offline;