export const Logo = () => {
  return (
    <>
      <div className="font-logo text-xl font-extrabold tracking-tight">Algorithm</div>
      <style jsx>{`
        div {
          mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.25) 50%, black 75%);
          mask-size: 400%;
          mask-position: 0%;
        }
        div:hover {
          mask-position: 100%;
          transition:
            mask-position 1s ease,
            -webkit-mask-position 1s ease;
        }
      `}</style>
    </>
  );
};
