const btn = document.getElementById('btn');
const text = document.getElementById('text');
const action = () => {
  text.innerText = 'ボタンをクリックしました';
};

btn.addEventListener('click', () => {
  setTimeout(action,2000);
});