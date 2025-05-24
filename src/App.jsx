import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-[999999]">
          <WhatsappButton />
        </div>
      </div>
    </Router>
  );
}

export default App;