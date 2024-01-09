export default function AdaptiveProfileShowcase({ profileSection, navSection, children }) {
    return (
        <div className="min-h-screen flex flex-col w-full md:p-12 p-6 max-w-screen-3xl mx-auto">
            <div className='flex md:flex-row flex-col w-full md:space-x-6 space-y-6'>
                <div className='h-fit md:w-96 w-full'>
                    {profileSection}
                </div>
                <div className='flex flex-0 flex-col md:pt-14 w-full'>
                    <div className='flex md:justify-end justify-center'>
                        {navSection}
                    </div>
                    <div className="w-full content-card md:p-12 p-6">
                        {children}
                    </div>
                </div>
            </div>
            <footer className="flex justify-center items-center pt-6">
                <p>
                    © 2024 Ian Skelskey. All rights reserved.
                </p>
            </footer>
        </div>
    )
}