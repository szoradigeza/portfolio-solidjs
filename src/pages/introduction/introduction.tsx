import { createEffect, createSignal } from "solid-js";
import * as Styled from "./introduction.styled";

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
              duration: 400,
              iterations: Infinity,
              easing: "cubic-bezier(0,.26,.44,.93)",
            };

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
      <div class="w- flex justify-center items-center px-6">
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
    </>
  );
};

export default Introduction;
