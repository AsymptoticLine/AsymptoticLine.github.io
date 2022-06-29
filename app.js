async function fetchData(url) {
  const res = await fetch(`/data/${url}`);
  const data = await res.json();
  return data;
}

function Main(url) {
  let res = fetchData(url);
  res.then((data) => {
    let HTMLvalue = "";
    for (let i = 0; i < data.length; i++) {
      HTMLvalue += `<div class="QA"><div class="question">${data[i].Q}</div><div class="answer">${data[i].A}</div></div>`;
    }
    document.getElementById("container").innerHTML = HTMLvalue;
  });
  console.info("\u5c31\u4f60\u2122\u5c41\u4e8b\u591a");
}
