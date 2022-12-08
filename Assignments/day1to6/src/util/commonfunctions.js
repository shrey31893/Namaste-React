export async function FetchDataFromUrl(url) {
    const userData = await fetch(url);
    const dataJson = userData.json();
    return dataJson;
  }