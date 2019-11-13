import * as mainContent from "./mainContent";

export default function(st) {
  return `<main>
    ${mainContent[st.mainContent](st)}
  </main>`


}
