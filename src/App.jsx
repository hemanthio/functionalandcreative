

const App = () => {
  return (
   <div>
    <img className="w-full h-screen object-cover" src="hero.jpeg" alt="hero" />

<div className="absolute flex gap-[10px] max-sm:flex max-sm:flex-col  bottom-10 right-20">
   {/* functional  */}
    <div className="items-center w-[300px] justify-between rounded-md px-[10px] py-[4px] right-20 bottom-40 bg-black bg-opacity-50 flex  ">
      <div className="folder and text flex gap-[5px] items-center">
        <img className="w-[28px] h-[32px]" src="folder.svg" alt="folder" />
        <p className="text-white tracking-[-0.7px] font-Geist">Functional components</p>
      </div>
      <img className="w-[8px] h-[14px]" src="arrow.svg" alt="arrow" />
       

    </div>

{/* creative */}
    <div className="items-center w-[300px] justify-between rounded-md px-[10px] py-[4px] right-10 bottom-40 bg-black bg-opacity-50 flex  ">
      <div className="folder and text flex gap-[5px] items-center">
        <img className="w-[28px] h-[32px]" src="folder.svg" alt="folder" />
        <p className="text-white tracking-[-0.7px] font-Geist">Creative components</p>
      </div>
      <img className="w-[8px] h-[14px]" src="arrow.svg" alt="arrow" />
       

    </div>
</div>

   </div>
  )
}

export default App