import { createEffect, createSignal } from "solid-js";
import * as Styled from "./introduction.styled";
import sample from "../../assets/stage.mp4";

const welcomeText1 = "Hi, my name is Géza.";
const welcomeText2 = "I'm a full-stack web developer.";

const Introduction = () => {
  let textCursor: HTMLDivElement;
  const [welcomeTextPart1, setWelcomeTextPart1] = createSignal("");
  const [welcomeTextPart2, setWelcomeTextPart2] = createSignal("");

  function typing_animation(
    getState: () => string,
    setState: any,
    text: string,
    startDelay: number = 0,
  ) {
    const defaultDelay = 200;

    const chars = text.split("");
    chars.forEach((char, index) => {
      setTimeout(
        () => {
          if (!index) {
            let cursor_timings = {
              duration: 700,
              iterations: Infinity,
              easing: "cubic-bezier(0,.26,.44,.93)",
            };
            console.log("here");

            document.querySelector(".text_cursor").animate(
              [
                {
                  opacity: 0,
                },
                {
                  opacity: 0,
                  offset: 0.7,
                },
                {
                  opacity: 1,
                },
              ],
              cursor_timings,
            );
          }
          setState(`${getState()}${char}`);
        },
        startDelay + defaultDelay * index,
      );
    });

    const durationTime = text.length * defaultDelay;
    return durationTime;
  }

  createEffect(() => {
    const durationTime = typing_animation(
      welcomeTextPart1,
      setWelcomeTextPart1,
      welcomeText1,
    );

    typing_animation(
      welcomeTextPart2,
      setWelcomeTextPart2,
      welcomeText2,
      durationTime,
    );
  }, [textCursor]);

  return (
    <>
      <div class="flex justify-center mx-auto items-center px-6">
        <div class="text-white">
          <Styled.QuestionHeaderPausedText>
            <div class="p-10  flex flex-col items-center justify-center text-center">
              <Styled.TypingAnimationsWrapper>
                <Styled.TypingAnimationContainer>
                  <div class="text">
                    <h1 class="text-4xl font-bold">{welcomeTextPart1()}</h1>
                  </div>
                  {welcomeTextPart1().length < welcomeText1.length && (
                    <div class="text_cursor" />
                  )}
                </Styled.TypingAnimationContainer>
                <Styled.TypingAnimationContainer>
                  <div class="text">
                    <p class="text-lg mt-2">{welcomeTextPart2()}</p>
                  </div>
                  <div class="text_cursor" />
                </Styled.TypingAnimationContainer>
              </Styled.TypingAnimationsWrapper>
            </div>
          </Styled.QuestionHeaderPausedText>
          <div class="mt-36 pb-12 px-8"></div>
        </div>
      </div>
      <div class="mb-0 mr-0 flex justify-end items-center space-x-3 px-4 mx-auto pt-4 pb-4">
        <a href="#">
          <svg
            class="h-6 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
            <rect x="2" y="9" width="4" height="12" />{" "}
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="#">
          <svg
            class="h-6 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
        </a>
        <a href="#">
          <svg
            class="h-8 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Introduction;
