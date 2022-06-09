import Navbar from "../components/Navbar"


// Separate 'style' b/c Tailwind CSS can get messy.
const style = {
  wrapper: `h-screen w-screen flex flex-col`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        {/* map */}
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}> 
          {/* location selector */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}


// <div className="h-sc h-scree w-sc"></div>