import { Globe } from "lucide-react"
import { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./ui/tooltip"

function getHour() {
  return new Date().getHours()
}

function getMinute() {
  return new Date().getMinutes()
}

function getSecond() {
  return new Date().getSeconds()
}

export default function CurrentTime() {
  const [hour, setHour] = useState(getHour())
  const [minute, setMinute] = useState(getMinute())
  const [second, setSecond] = useState(getSecond())
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(getHour())
      setMinute(getMinute())
      setSecond(getSecond())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center gap-x-2 rounded-full border border-border/70 bg-card/75 px-2.5 py-2 shadow-xs backdrop-blur-sm">
            <Globe className="size-4" />
            <div className="flex items-center tabular-nums">
              <NumberFlow value={hour} format={{ minimumIntegerDigits: 2 }} />
              <span>:</span>
              <NumberFlow value={minute} format={{ minimumIntegerDigits: 2 }} />
              <span>:</span>
              <NumberFlow value={second} format={{ minimumIntegerDigits: 2 }} />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="left">
          time for me (in new zealand)
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
