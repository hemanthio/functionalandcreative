import { MoveRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import confetti from 'canvas-confetti'

export default function SubmitButton() {
  const [state, setState] = useState("idle")
  const buttonRef = useRef(null)

  const triggerConfetti = () => {
    const buttonElement = buttonRef.current
    if (!buttonElement) return

    const rect = buttonElement.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#000000', '#ffffff', '#808080'],
      startVelocity: 30,
      gravity: 0.8,
      scalar: 0.7,
    })
  }

  const handleSubmit = async () => {
    if (state !== "idle") return
    setState("submitting")

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setState("success")
    triggerConfetti()

    setTimeout(() => {
      setState("idle")
    }, 4000)
  }

  const submitText = "Submit"

  return (
    <div className="min-h-[500px] w-full relative flex items-center justify-center bg-gray-100">
      <button
        ref={buttonRef}
        onClick={handleSubmit}
        disabled={state !== "idle"}
        className="relative w-[140px] h-[48px] text-white bg-black rounded-full disabled:opacity-90 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {state === "idle" && (
            <motion.div key="idle" className="absolute inset-0 flex items-center justify-center gap-2">
              <div className="flex items-center">
                {submitText.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="font-medium relative"
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{
                      y: 48,
                      transition: {
                        duration: 0.4,
                        delay: i * 0.05,
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{
                  y: 48,
                  transition: {
                    duration: 0.4,
                    delay: submitText.length * 0.05,
                  },
                }}
              >
                <MoveRight className="w-4 h-4 " />
              </motion.div>
            </motion.div>
          )}

          {state === "submitting" && (
            <motion.div
              key="submitting"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          )}

          {state === "success" && (
            <motion.div
              key="success"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center font-medium"
            >
              Success
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}