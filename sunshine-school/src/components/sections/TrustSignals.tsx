import { Users, GraduationCap, Award } from 'lucide-react';

const stats = [
    {
        icon: Users,
        value: '2.000+',
        label: 'Zadovoljnih učenika iz Smedereva i okoline',
        bgColor: 'bg-sunshine-yellow/20',
        ringGradient: 'from-sunshine-yellow/70 via-sunshine-yellow/40 to-white/60',
        textColor: 'text-sun-yellow-dark',
        glow: 'shadow-[0_14px_30px_rgba(255,215,0,0.25)]'
    },
    {
        icon: GraduationCap,
        value: '100%',
        label: 'Diplomirani i iskusni nastavnici',
        bgColor: 'bg-deep-blue/15',
        ringGradient: 'from-deep-blue/60 via-sky-blue/40 to-white/60',
        textColor: 'text-deep-blue',
        glow: 'shadow-[0_14px_30px_rgba(25,118,210,0.25)]'
    },
    {
        icon: Award,
        value: '15+ godina',
        label: 'Iskustva u radu sa decom',
        bgColor: 'bg-success-green/15',
        ringGradient: 'from-success-green/60 via-success-green/30 to-white/60',
        textColor: 'text-success-green',
        glow: 'shadow-[0_14px_30px_rgba(76,175,80,0.25)]'
    }
];

export default function TrustSignals() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 transition-all duration-300 group-hover:scale-105">
                                <div className={`rounded-[28px] bg-gradient-to-br ${stat.ringGradient} p-[2px]`}
                                >
                                    <div
                                        className={`w-20 h-20 rounded-[26px] ${stat.bgColor} ${stat.glow} flex items-center justify-center ${stat.textColor} transition-transform duration-300 group-hover:scale-105`}
                                    >
                                        <stat.icon className="w-8 h-8" strokeWidth={1.6} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-4xl font-black text-dark-gray leading-none mb-2 tracking-tight">{stat.value}</div>
                            <div className="text-sm font-bold text-medium-gray uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
