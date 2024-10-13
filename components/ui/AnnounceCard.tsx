interface AnnouncementCardProps {
    title: string;
    date: string;
    description: string;
}

export default function AnnouncementCard({ title, date, description }: AnnouncementCardProps) {
    return (
        <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-xl shadow-lg">
            <div className="bg-[#BA2025] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 rounded-xl shadow-md">
                <div className="flex flex-row justify-between items-center mb-2">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white">
                        {title}
                    </h2>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
                        {date}
                    </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
                    {description}
                </p>
            </div>
        </div>
    );
}
