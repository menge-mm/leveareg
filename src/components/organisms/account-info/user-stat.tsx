import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../../atoms/card";
import { ClockIcon, ListIcon, LogInIcon, User2Icon, X } from "lucide-react";

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

const StatCard = ({ icon, title, value }: StatCardProps) => (
  <Card className="min-w-[340px] flex-1">
    <CardContent className="flex flex-col items-center gap-2 pt-3">
      <div className="flex gap-3 items-center">
        {icon}
        <CardTitle className="text-md uppercase tracking-widest">{title}</CardTitle>
      </div>
      <hr className="bg-primary w-[20%] my-3 border-transparent" />
      <CardDescription className="text-xl py-0 text-center font-mono text-primary">
        {value}
      </CardDescription>
    </CardContent>
  </Card>
);

const UserStat = () => {
  const [userStats, setUserStats] = useState({
    registrations: 42,
    usageTime: "186 hours",
    lastLogin: "2024-04-06 08:20:00",
    loginCount: 109,
  });
  return (
    <div className="justify-content-center mt-2">
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex flex-col md:flex-row gap-2 flex-1">
          <StatCard
            icon={<ListIcon size={24} />}
            title="Patients"
            value={userStats.registrations}
          />
          <StatCard icon={<ClockIcon size={24} />} title="Usage Time" value={userStats.usageTime} />
        </div>
        <div className="flex flex-col md:flex-row gap-2 flex-1">
          <StatCard
            icon={<LogInIcon size={24} />}
            title="Last Login"
            value={new Date(userStats.lastLogin).toLocaleString()}
          />
          <StatCard
            icon={<User2Icon size={24} />}
            title="Login Count"
            value={userStats.loginCount}
          />
        </div>
      </div>
    </div>
  );
};

export default UserStat;
