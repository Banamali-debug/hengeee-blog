function levelUp() {
  useSeq = [];
  level++;
  h2.innerText = `Level${level}`;
  let randInd = Math.floor(Math.random() * 3);
  let randColor = btnss[randInd];
  let btns = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(btns);
}
