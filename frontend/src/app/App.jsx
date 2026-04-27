import "./App.css";
import Editor from "@monaco-editor/react";

function App() {

  return (
    <div className="App">
     <main className="h-screen w-full bg-black p-8 flex">
      <aside className="h-full w-1/4 bg-amber-50 rounded-xl"></aside>
      <section className="h-full w-3/4 bg-gray-700 gap-4 p-4">

        <Editor
         defaultLanguage="javascript"
         theme="vs-dark"
         defaultValue="//javascript"
        />
        
        </section>
     </main>
    </div>
  );
}

export default App;