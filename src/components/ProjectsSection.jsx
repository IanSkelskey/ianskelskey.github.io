export default function ProjectsSection() {
    return (
        <div className="flex flex-col w-full h-full space-y-6">
            <p className="text-neutral-400">
                Below are some of my projects.
            </p>
            <h2 className="text-2xl text-white">Field Day</h2>
            <p className="text-neutral-400">
                Field day is a data collection and management system for field wildlife researchers.
            </p>
            <img src="/assets/mockup.png" alt="Mockup of the Field Day website" className="w-4/5 h-full object-cover rounded-2xl " />
        </div>
    );
}