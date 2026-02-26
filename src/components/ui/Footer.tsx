interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full py-12 px-6 flex flex-col justify-center items-center opacity-40 ${className}`}
    >
      <p className="text-[10px] tracking-[0.2em] font-sans uppercase">
        © {new Date().getFullYear()}
      </p>
      <p className="text-[10px] tracking-[0.2em] font-sans uppercase">
        Academusa
      </p>
    </footer>
  );
};

export default Footer;
