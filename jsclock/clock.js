const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
  const now = new Date()

  console.log(now)

  const seconds = now.getSeconds()
  const secsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secsDegrees}deg)`
  if (secsDegrees === 444 || secsDegrees === 90) {
    secondHand.style.transition = "all 0s ease 0s"
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2, 0.5, 1)"
  }

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`
  if (minsDegrees === 444 || minsDegrees === 90) {
    minuteHand.style.transition = "all 0s ease 0s"
  } else {
    minuteHand.style.transition = "all 0.05s cubic-bezier(0.1, 2, 0.5, 1)"
  }

  const hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  if (hoursDegrees === 780 || hoursDegrees === 90) {
    hourHand.style.transition = "all 0s ease 0s"
  } else {
    hourHand.style.transition = "all 0.05s cubic-bezier(0.1, 2, 0.5, 1)"
  }
}

setInterval(setDate, 1000)