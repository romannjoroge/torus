import Image from "next/image";
export default function Page() {
    return (<div className="p-2">
        <h2>Event Title</h2>
        <Image 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            width={100} 
            height={100} 
            alt="Banner Image" 
            className="py-4"
        />
        <p className="py-4">Some form of description</p>
        <div className="flex justify-between">
            <button>RSVP</button>
            <button>View More Details</button>
        </div>
    </div>);
}