import "./styles.css";
const onclickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成

  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button　完了ボタンタグを生成　完了ボタンを押したときに完了こーなへ移動するイベントをこの時点で設定する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンから未完了リスト
    deleteFromIncompleteList(completeButton.parentNode);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグのdivタグを未完了リストから削除したい
    //ボタンの親要素をまずは取得する
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
