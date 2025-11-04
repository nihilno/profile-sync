function JobInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="text-foreground flex items-center gap-2">
      {icon}
      {text}
    </div>
  );
}

export default JobInfo;
