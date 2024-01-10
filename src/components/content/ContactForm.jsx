import SmallCard from "../atoms/SmallCard";
import SubSection from "../layout/SubSection";

export default function ContactForm() {
    return (
        <SubSection title="Get in touch">
            <div className="w-full flex justify-center">
                <SmallCard>
                    <form className="flex flex-col space-y-3 p-6">
                        <p className="subtle-text py-6">I'm always open to discussing product design work or partnership opportunities.</p>
                        <div className="flex flex-col space-y-3">
                            <label className="subtle-text text-xs" htmlFor="name">Name</label>
                            <input className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2" type="text" name="name" id="name" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="subtle-text text-xs" htmlFor="email">Email</label>
                            <input className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2" type="email" name="email" id="email" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="subtle-text text-xs" htmlFor="message">Message</label>
                            <textarea className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2" name="message" id="message" rows="5" />
                        </div>
                        <div className="w-full flex">
                            <button className="bg-blue-gradient rounded-md w-fit py-1 px-3 text-white">Send</button>
                        </div>

                    </form>
                </SmallCard>
            </div>
        </SubSection>
    )
}