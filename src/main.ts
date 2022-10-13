import './style.css'
import 'uno.css'


const btn = document.querySelector("#btn")!
const audio = document.querySelector("#audio")! as HTMLAudioElement
const animate_box = document.querySelector("#animate_box")!
const count_box = document.querySelector("#count")! as HTMLDivElement

fetch('https://wss.laihaojie.com/api/tools/voiceBroadcast?text=有人使用了木鱼')

let count = Number(localStorage.getItem("count") || 0)

count_box.innerText = `公德数量: ${count}`

btn?.addEventListener('click', () => {
  // 播放声音
  if (audio.paused) { audio.play() }
  else { audio.currentTime = 0 }

  // 公德加一动画
  const animate = document.createElement("div")
  animate.classList.add("animate")
  animate.innerText = "公德 +1"
  // 移除动画
  setTimeout(() => animate.remove(), 780)
  animate_box.appendChild(animate)


  // 木鱼缩放动画
  btn.classList.add('scale')
  setTimeout(() => { btn.classList.remove('scale') }, 90)

  // 公德数量加一
  count++
  count_box.innerText = `公德数量: ${count}`
  localStorage.setItem("count", count + "")

})