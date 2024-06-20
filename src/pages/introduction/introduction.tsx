import { createSignal } from "solid-js";

const Introduction = () => {
  const [displayWelcomeText2, setdisplayWelcomeText2] = createSignal(false);

  setTimeout(() => {
    setdisplayWelcomeText2(true);
  }, 1200);

  return (
    <>
      <div class="flex justify-center mx-auto items-center ">
        <div class="text-white">
          <div class=" mt-24  flex flex-col items-center justify-center text-center">
            <div class="text inline-block">
              <div class="text-4xl font-bold typed-out">
                Hi, my name is Géza.
              </div>
            </div>
            <div></div>
            {
              <div class="text">
                <p
                  class={`  text-lg mt-2  ${displayWelcomeText2() ? "typed-out" : "hidden"} `}
                >
                  I'm a full-stack web developer.
                </p>
              </div>
            }
          </div>
          <div class="mt-36 pb-12 px-8"></div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
