export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { bg:'#171817', side:'#111211', card:'#222321', surf:'#292A27', gold:'#E9AE56', gold2:'#C68A39', ink:'#F4F1E9', mute:'#92928C' },
    fontFamily: { sans:['Manrope','system-ui','sans-serif'], display:['Fraunces','Georgia','serif'] },
    boxShadow: { neu:'8px 8px 20px rgba(0,0,0,.45), -4px -4px 14px rgba(255,255,255,.025)', inset:'inset 1px 1px 0 rgba(255,255,255,.05)' }
  } }, plugins: []
}
