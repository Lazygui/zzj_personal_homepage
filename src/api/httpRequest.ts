import axios from 'axios';
const config =
{
       aWord: "https://v1.hitokoto.cn/"
}
const GetAWord = async (ok: any) => {
       try {
              const response = await axios.get(config.aWord);
              if (response.status !== 200) {
                     console.error(response.statusText)
              }
              ok(response.data);
       } catch (error: any) {
              console.error(error.message)
       }
}
export default GetAWord
