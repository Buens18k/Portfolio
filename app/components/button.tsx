interface buttonProps {
  title: string;
}

function Button({ title }: buttonProps) {
  return (
    <button className="rounded-full bg-slate-400 p-2 w-full" type="button">
      {title}
    </button>
  );
}

export default Button;
