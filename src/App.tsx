import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, Sparkles, ChevronRight, ChevronLeft, 
  CheckCircle, Play, Upload, MessageCircle, 
  Send, Video as VideoIcon, 
  Zap, Camera, Shield, Heart, Share2, 
  Image as ImageIcon, Download, Sliders, Eye,
  FileVideo, Lock, UserPlus, CreditCard, Mail, Key, User, Wand2,
  Monitor, Volume2, Layers, Scissors, Palette, BookOpen, Search, Activity,
  Settings, Database, TrendingUp, Clock, X, Wind, Sun, Target, Maximize,
  Info, HelpCircle, Users, Film
} from 'lucide-react';

// --- PRODUCTION AI TOOLSET GENERATOR (120 PER BOARD / 600 TOTAL) ---
const generateTools = (category) => {
  const baseTools = {
    Writing: ["Neural Script Architect", "DeepPlot Narrative AI", "Dialogue Synthesis Engine", "Character Core Logic", "Three-Act Quantum Solver", "Arc Flow Optimizer", "DeepLore Neural Link", "Subtext Logic Synth", "Scene-Beat Optimizer", "Climatic Logic Pro", "Backstory Neural Weaver", "Protagonist Core Lab"],
    Voice: ["Neural Vocal Clone Pro", "Atmospheric Timbre Synth", "Emotion-Depth Modulator", "Sonic Dialect Weaver", "DeepBreath Neural AI", "Vocal Clarity Engine", "Resonance Mapping Pro", "Linguistic Flow Lab", "Neural Accent Synthesis", "Studio Harmony Logic", "Whisper-Logic Pro", "Vocal Identity Synth"],
    Image: ["Neural Asset Architect", "Quantum Texture Mapper", "VFX Plate Synthesis", "Matte Painting Logic", "Atmospheric Light Engine", "Skin-Shader Neural Lab", "Depth-Field Logic Pro", "Style Transfer Matrix", "Background Weaver AI", "Cinematic Grain Synth", "Reflection Logic Engine", "Particle Physics Synth"],
    Video: ["Temporal Motion Synth", "Cinematic Camera Logic", "Neural Avatar Rigger", "Dynamic Pan AI", "Crane Shot Simulator", "Dolly Zoom Neural Pro", "Tracking Shot Logic", "Frame Interpolation Pro", "Depth Motion Synth", "Action-Sequence Weaver", "Perspective Shift AI", "Dynamic Focus Lab"],
    Motion: ["Skeleton Tracker Pro", "Neural Mocap Logic", "Fluid Physics Engine", "Cloth Dynamics AI", "Facial Logic Synthesis", "Joint Precision Engine", "Gravity Simulator Lab", "Collision Matrix Pro", "Soft-Body Neural Pro", "Muscle-Fiber Logic", "Impact Logic Mapper", "Auto-Rigger Neural V2"]
  };
  const list = [];
  const source = baseTools[category] || baseTools["Writing"];
  for (let i = 0; i < 120; i++) {
    const base = source[i % source.length];
    const version = i >= source.length ? " PRO " + Math.floor(i / source.length) : "";
    list.push(`${base}${version}`.toUpperCase());
  }
  return list;
};

const BOARD_DATA = {
  Writing: generateTools("Writing"),
  Voice: generateTools("Voice"),
  Image: generateTools("Image"),
  Video: generateTools("Video"),
  Motion: generateTools("Motion")
};

// --- TITLED ENHANCEMENT TOOLS (PAGE 13 GRID) ---
const ENHANCEMENT_TOOLS = [
  "Neural Upscale 8K", "HDR Pro Mapper", "Cinematic Light Synth", "Noise Clear Pro", "Depth Motion AI",
  "Vocal Clarifier", "Atmospheric Haze", "Global Grain Synth", "Ray Tracing Logic", "Shadow Recovery",
  "Highlight Optimizer", "Chromatic Fix", "Temporal Stabilizer", "Frame Weaver", "Anamorphic Pro",
  "Color Grade Logic", "Skin Detail Synth", "Focus Drift AI", "Bokeh Pro Filter", "Motion Blur Sync",
  "Neural Roto Lab", "Sky Swap Pro", "Fluid Dynamics AI", "VFX Plate Synth", "Texture Quantum",
  "Lens Flare Neural", "God Rays Logic", "Bloom Radiance", "Speed Ramp AI", "Master Resolution"
];

// --- MAIN APPLICATION ---
export default function App() {
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Studio');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Master Activation
  const [duration, setDuration] = useState(90);
  const [isRendering, setIsRendering] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const videoRef = useRef(null);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  // Video playback management
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if ([1, 2, 10, 21].includes(page)) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [page]);

  const goTo = (p) => { 
    setPage(p); 
    setMenuOpen(false); 
  };

  // --- CENTERED NAVIGATION COMPONENT ---
  const Navigation = () => {
    if (page === 1 || page === 21) return null;
    return (
      <div className="fixed bottom-14 left-0 w-full flex justify-center gap-6 z-[400] px-4 pointer-events-none pb-2">
        <button 
          onClick={() => setPage(page - 1)}
          className="pointer-events-auto bg-zinc-950/90 border border-studio-purple-dim px-12 py-3 rounded-xl font-black uppercase text-studio-purple hover:bg-studio-purple hover:text-white transition-all shadow-xl active:scale-95 text-xs tracking-widest backdrop-blur-md"
        >
          <ChevronLeft size={16} /> Back
        </button>
        <button 
          onClick={() => setPage(page + 1)}
          className="pointer-events-auto bg-studio-purple border border-studio-purple-dim px-12 py-3 rounded-xl font-black uppercase text-white hover:bg-purple-800 transition-all shadow-glow active:scale-95 text-xs tracking-widest"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-studio-purple selection:text-white">
      
      {/* QUICK ACCESS HUB */}
      <div className="fixed top-6 right-6 z-[500]">
        <button onClick={() => setMenuOpen(!menuOpen)} className="bg-studio-purple p-3 rounded-full shadow-glow text-white hover:scale-110 transition-transform">
          <Menu size={22} />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-0 bg-zinc-950 border border-studio-purple-dim p-5 rounded-3xl w-64 shadow-3xl animate-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-2">
              {[
                {p:1, l:"Home"}, {p:4, l:"AI Hub"}, {p:11, l:"Editor"}, 
                {p:13, l:"Enhancer"}, {p:16, l:"Final Hub"}, {p:19, l:"Agent Grok Help"}, {p:21, l:"Finale"}
              ].map((item) => (
                <button key={item.p} onClick={() => goTo(item.p)} className="text-right text-mini font-black uppercase text-studio-purple p-3 hover:bg-studio-purple hover:text-white rounded-xl transition-all border border-studio-purple-dim/10 leading-none">
                  {item.l}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AGENT GROK HELPDESK MARKER */}
      <button onClick={() => setPage(19)} className="fixed bottom-6 right-6 z-[500] bg-studio-purple p-3.5 rounded-full shadow-glow border border-white/10 hover:scale-110 transition-transform">
        <MessageCircle size={22} className="text-white" />
      </button>

      {/* UNIVERSAL MASTER FOOTER */}
      {page >= 3 && (
        <div className="fixed bottom-0 left-0 w-full bg-black/95 py-2.5 text-center z-[350] border-t border-studio-purple-dim backdrop-blur-md">
          <p className="text-tiny uppercase font-black text-white/60 tracking-widest-plus px-4 leading-none italic">
            MandaStrong Studio 2025 • Author of Doxy The School Bully • MandaStrong1.Etsy.com
          </p>
        </div>
      )}

      <Navigation />

      {/* CINEMATIC BACKGROUND ENGINE */}
      {[1, 2, 10, 21].includes(page) && (
        <div className="absolute inset-0 z-0 bg-black">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-loop-1196-large.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <main className="relative z-10 min-h-screen">
        
        {/* PAGE 1: LANDING PAGE */}
        {page === 1 && (
          <div className="h-screen flex flex-col items-center text-center px-6">
            <div className="mt-12">
               <div className="bg-blue-500/10 border border-blue-500/40 text-studio-purple px-6 py-1 rounded-full text-micro font-black uppercase italic mb-4 inline-block">Professional Movie Making Suite</div>
               <h1 className="text-studio-landing font-black text-white uppercase italic tracking-tighter leading-none mb-2 drop-shadow-2xl">
                 MANDASTRONG'S STUDIO
               </h1>
               <p className="text-xl md:text-2xl font-black italic text-studio-purple uppercase tracking-tight leading-tight opacity-90">
                 Welcome To An All In One Make A Movie App ~ Up To 3 Hours
               </p>
            </div>
            
            <div className="mt-auto mb-24 flex flex-wrap justify-center gap-6">
              <button onClick={() => setPage(2)} className="bg-white text-black px-16 py-4 rounded-2xl font-black uppercase text-2xl hover:scale-105 transition-all shadow-xl active:scale-95">Next</button>
              <button onClick={() => setPage(3)} className="bg-studio-purple text-white px-16 py-4 rounded-2xl font-black uppercase text-2xl hover:scale-105 transition-all shadow-xl active:scale-95 border-2 border-white/20">Login</button>
              <button onClick={() => setPage(3)} className="bg-studio-purple text-white px-16 py-4 rounded-2xl font-black uppercase text-2xl hover:scale-105 transition-all shadow-xl active:scale-95 border-2 border-white/20">Register</button>
            </div>
            
            <div className="absolute bottom-6 w-full text-center">
               <button onClick={() => setPage(4)} className="text-white/40 text-tiny font-black uppercase tracking-widest-ultra hover:text-studio-purple transition-all italic leading-none">Explore Production Directory</button>
            </div>
          </div>
        )}

        {/* PAGE 2: MISSION SPLASH */}
        {page === 2 && (
          <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-studio-purple-overlay">
            <Sparkles size={60} className="text-studio-purple mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">MANDASTRONG'S STUDIO</h1>
            <p className="text-2xl md:text-4xl font-black text-studio-purple italic uppercase max-w-4xl mb-12 leading-tight text-center drop-shadow-lg">Make Awesome Family Movies & Bring Dreams To Life!</p>
          </div>
        )}

        {/* PAGE 3: AUTH & PRICING */}
        {page === 3 && (
          <div className="p-4 pt-12 pb-40 max-w-7xl mx-auto overflow-y-auto custom-scrollbar">
            <div className="text-center mb-12">
               <div className="bg-studio-purple-dim border border-studio-purple-light text-studio-purple p-2 rounded-lg mb-10 text-center font-black uppercase tracking-widest text-[10px] max-w-md mx-auto shadow-glow backdrop-blur-md leading-none">
                  Logged in successfully! Studio Master Status Active
               </div>

              <div className="bg-gradient-to-br from-zinc-950 to-black p-8 rounded-2xl border-2 border-studio-purple mb-12 text-center shadow-xl max-w-2xl mx-auto backdrop-blur-xl">
                <h2 className="text-4xl font-black mb-2 text-studio-purple uppercase italic">AMANDA STRONG</h2>
                <p className="text-xl text-white font-bold uppercase tracking-widest">Studio Plan Master</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                 <div className="bg-zinc-950/50 border border-studio-purple-dim p-10 rounded-[40px] text-left backdrop-blur-sm shadow-xl">
                    <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-2 text-white/90 tracking-widest border-b border-studio-purple-dim pb-2 leading-none uppercase"><Lock size={18} className="text-studio-purple"/> User Login</h3>
                    <div className="space-y-4">
                       <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-zinc-800 p-4 rounded-xl text-mini font-bold focus:border-studio-purple outline-none transition-all text-white" />
                       <input type="password" placeholder="Password" className="w-full bg-black/40 border border-zinc-800 p-4 rounded-xl text-mini font-bold focus:border-studio-purple outline-none transition-all text-white" />
                       <button onClick={() => setIsLoggedIn(true)} className="w-full bg-studio-purple py-4 rounded-xl font-black uppercase text-sm tracking-widest shadow-md hover:bg-purple-800 transition-colors">Sign In</button>
                    </div>
                 </div>
                 <div className="bg-zinc-950/50 border border-studio-purple-dim p-10 rounded-[40px] text-left backdrop-blur-sm shadow-xl">
                    <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-2 text-white/90 tracking-widest border-b border-studio-purple-dim pb-2 leading-none uppercase"><UserPlus size={18} className="text-studio-purple"/> User Register</h3>
                    <div className="space-y-4">
                       <input type="text" placeholder="Full Name" className="w-full bg-black/40 border border-zinc-800 p-4 rounded-xl text-mini font-bold focus:border-studio-purple outline-none transition-all text-white" />
                       <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-zinc-800 p-4 rounded-xl text-mini font-bold focus:border-studio-purple outline-none transition-all text-white" />
                       <button className="w-full bg-zinc-900 border border-studio-purple-dim py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-studio-purple-overlay transition-all text-white/40">Register Account</button>
                    </div>
                 </div>
              </div>
            </div>

            <div className="border-t border-studio-purple-dim pt-12 text-center">
              <h2 className="text-3xl font-black mb-10 uppercase italic text-studio-purple tracking-widest leading-none">Studio Production Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
                {[
                  {t:'Basic', p:'20', d:['HD Export', '100 AI Tools', 'Standard Rendering']},
                  {t:'Pro', p:'30', d:['4K Export', '300 AI Tools', 'Fast Render Queue']},
                  {t:'Studio', p:'50', d:['8K Export', 'All 600 AI Tools', 'Priority Neural Compute']}
                ].map(plan => (
                  <div key={plan.t} className={`bg-zinc-950/30 border-2 rounded-3xl p-8 transition-all ${selectedPlan === plan.t ? 'border-studio-purple shadow-glow scale-105 bg-studio-purple-overlay' : 'border-zinc-900 opacity-40'}`}>
                    <h3 className="text-2xl font-black uppercase mb-1 text-white leading-none">{plan.t}</h3>
                    <div className="text-5xl font-black text-studio-purple mb-8 tracking-tighter">${plan.p}<span className="text-mini opacity-50">/mo</span></div>
                    <ul className="space-y-4 mb-10 text-left">
                      {plan.d.map(item => (
                        <li key={item} className="text-mini font-bold uppercase flex items-center gap-2 text-white/60 leading-tight">
                          <CheckCircle size={14} className="text-studio-purple" /> {item}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-4 rounded-xl font-black uppercase text-mini tracking-widest transition-all ${selectedPlan === plan.t ? 'bg-studio-purple text-white shadow-md' : 'bg-zinc-900 text-zinc-600'}`}>
                      {selectedPlan === plan.t ? 'Master Key Active' : 'Select Tier'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 4: HUB DIRECTORY */}
        {page === 4 && (
          <div className="p-8 pt-20 pb-40 max-w-7xl mx-auto text-center">
            <h1 className="text-7xl font-black uppercase italic text-studio-purple mb-16 tracking-tighter drop-shadow-2xl leading-none">AI HUB DIRECTORY</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {["Writing", "Voice", "Image", "Video", "Motion"].map((cat, i) => (
                <div key={cat} onClick={() => setPage(5+i)} className="bg-zinc-950/40 border-2 border-studio-purple-dim rounded-[40px] p-12 hover:border-studio-purple transition-all cursor-pointer group shadow-2xl relative active:scale-95">
                  <div className="text-8xl mb-8 group-hover:scale-110 transition-transform drop-shadow-md">{["✍️", "🎙️", "🎨", "🎬", "🎭"][i]}</div>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2 leading-none">{cat} Board</h3>
                  <p className="text-mini font-black text-studio-purple uppercase tracking-widest opacity-80 leading-none">120 PRO AI TOOLS</p>
                </div>
              ))}
              <div onClick={() => setPage(10)} className="bg-zinc-950/40 border-2 border-white/10 rounded-[40px] p-12 hover:border-white/40 transition-all cursor-pointer group active:scale-95 shadow-2xl text-8xl flex flex-col items-center justify-center">
                <span className="group-hover:scale-110 transition-transform">⭐</span>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter mt-8 leading-none">Editor's Choice</h3>
              </div>
            </div>
          </div>
        )}

        {/* PAGES 5-9: LIVE PRODUCTION BOARDS */}
        {(page >= 5 && page <= 9) && (
          <div className="flex h-screen bg-black pt-20 overflow-hidden">
             {/* LEFT: WORKSTATION PANEL */}
             <div className="w-1/4 border-r border-studio-purple-dim p-10 overflow-y-auto custom-scrollbar bg-black/40">
                <h2 className="text-4xl font-black uppercase italic text-studio-purple tracking-widest mb-6 border-b border-studio-purple-dim pb-4 leading-none uppercase">{["Writing", "Voice", "Image", "Video", "Motion"][page-5]} BOARD</h2>
                <div className="grid grid-cols-1 gap-3 pb-48">
                   {BOARD_DATA[["Writing", "Voice", "Image", "Video", "Motion"][page-5]].map((tool, i) => (
                     <button key={i} className="bg-zinc-950/30 border-2 border-zinc-900 p-5 rounded-2xl text-left hover:border-studio-purple hover:bg-studio-purple-overlay transition-all group active:scale-95 relative overflow-hidden shadow-lg">
                        <span className="text-micro font-black uppercase text-white/60 tracking-tighter italic block group-hover:text-white transition-colors leading-none">{tool}</span>
                     </button>
                   ))}
                </div>
             </div>
             {/* RIGHT: LIVE PREVIEW ENGINE */}
             <div className="flex-grow flex flex-col items-center justify-center relative bg-zinc-950/50 overflow-hidden text-center">
                <div className="z-10 opacity-30">
                   <Sparkles size={120} className="mx-auto mb-6 text-studio-purple animate-pulse" />
                   <h3 className="text-5xl font-black uppercase italic tracking-[0.3em] text-white/60 leading-none text-center">Synthetic Engine Active</h3>
                   <p className="text-studio-purple font-mono text-xl mt-8 tracking-widest-ultra animate-pulse uppercase leading-none">8K CINEMA STREAM</p>
                </div>
             </div>
          </div>
        )}

        {/* PAGE 10: EDITOR'S CHOICE PORTAL */}
        {page === 10 && (
          <div className="h-screen flex flex-col justify-center items-center text-center p-8 bg-black/40">
             <h1 className="text-studio-title font-black uppercase italic text-studio-purple mb-8 tracking-tighter drop-shadow-2xl leading-none">EDITOR'S CHOICE</h1>
             <div className="w-full max-w-5xl aspect-video bg-zinc-950 border-4 border-studio-purple-dim rounded-[40px] shadow-3xl flex flex-col items-center justify-center relative group hover:border-studio-purple transition-all overflow-hidden">
                <Upload size={80} className="text-studio-purple mb-8 animate-bounce opacity-80" />
                <button onClick={() => setPage(11)} className="bg-studio-purple text-white px-20 py-5 rounded-2xl font-black uppercase text-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform uppercase">Upload Cinematic Assets</button>
             </div>
          </div>
        )}

        {/* PAGE 11: PRECISION EDITOR SUITE */}
        {page === 11 && (
          <div className="p-8 pt-20 pb-32 h-screen overflow-hidden flex flex-col">
            <h1 className="text-4xl font-black uppercase italic text-white/90 mb-10 tracking-widest leading-none">Precision Multi-Track Editor</h1>
            <div className="flex-grow grid grid-cols-4 gap-8">
               <div className="col-span-3 aspect-video bg-zinc-900/50 border-2 border-studio-purple-dim rounded-[40px] shadow-3xl flex items-center justify-center relative group overflow-hidden cursor-pointer">
                  <Play size={100} className="text-studio-purple opacity-20 group-hover:opacity-60 transition-all shadow-glow" />
               </div>
               <div className="bg-zinc-950/40 border border-zinc-900 rounded-[30px] p-8 shadow-2xl overflow-y-auto custom-scrollbar">
                  <h3 className="text-mini font-black uppercase mb-8 text-studio-purple tracking-widest opacity-70 border-b border-studio-purple-dim pb-2 leading-none uppercase">Global Asset Library</h3>
                  <div className="space-y-4">
                    {[1,2,3,4,5,6,7,8].map(i => (
                       <div key={i} className="bg-black/40 p-5 rounded-xl border border-zinc-800 flex items-center gap-4 group hover:border-studio-purple transition-all cursor-move shadow-md">
                          <FileVideo size={20} className="text-zinc-700" />
                          <span className="text-mini font-black uppercase text-zinc-500 group-hover:text-white italic leading-none uppercase tracking-tighter">Project_Clip_00{i}.mp4</span>
                       </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* PAGE 12: ASSET MANAGER - UPLOAD TOP RIGHT */}
        {page === 12 && (
          <div className="p-10 pt-20 pb-40 max-w-7xl mx-auto text-center relative">
             <div className="absolute top-24 right-10">
                <button className="bg-studio-purple text-white px-8 py-3 rounded-2xl font-black uppercase text-mini shadow-glow hover:scale-105 transition-all flex items-center gap-2 active:scale-95">
                   <Upload size={18} /> Upload Media
                </button>
             </div>
             <h1 className="text-5xl font-black uppercase italic text-studio-purple mb-16 tracking-widest leading-none">Media Asset Manager</h1>
             <div className="grid grid-cols-4 md:grid-cols-6 gap-8">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className="aspect-square bg-zinc-900 border-2 border-zinc-800 rounded-3xl flex items-center justify-center group hover:border-studio-purple transition-all cursor-pointer relative overflow-hidden shadow-xl active:scale-90">
                     <ImageIcon size={40} className="text-zinc-700 group-hover:text-studio-purple" />
                     <div className="absolute bottom-3 right-3 text-micro font-mono text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity uppercase">Asset_{i}.png</div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* PAGE 13: MOVIE ENHANCER - 30 TITLED GRID BOXES */}
        {page === 13 && (
          <div className="p-10 pt-20 text-center pb-80 max-w-7xl mx-auto overflow-y-auto custom-scrollbar">
            <h1 className="text-[7rem] font-black uppercase italic text-studio-purple mb-4 tracking-tighter drop-shadow-2xl leading-none uppercase">MOVIE ENHANCER</h1>
            <p className="text-white/40 font-black uppercase text-tiny tracking-widest-ultra mb-12 italic opacity-60 leading-none uppercase">Neural Cinematic Optimization Grid</p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3 mb-16 max-w-7xl mx-auto">
               {ENHANCEMENT_TOOLS.map((tool, i) => (
                  <button 
                    key={i} 
                    className="bg-zinc-950/50 border-2 border-zinc-900 p-4 rounded-2xl hover:border-studio-purple hover:bg-studio-purple-overlay transition-all group active:scale-95 text-center flex flex-col items-center justify-center min-h-28 shadow-lg"
                  >
                     <Zap size={24} className="glyph-icon transition-all mb-3 opacity-60" />
                     <span className="text-micro font-black text-zinc-600 group-hover:text-white uppercase tracking-tighter leading-tight block">{tool}</span>
                  </button>
               ))}
            </div>

            <div className="max-w-4xl mx-auto bg-zinc-900/50 p-12 rounded-[60px] border-2 border-studio-purple-dim shadow-3xl backdrop-blur-3xl">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-black uppercase tracking-widest text-white/70 italic leading-none">Master Project Duration</h3>
                  <span className="text-studio-purple font-black text-7xl italic drop-shadow-lg tracking-tighter leading-none">{duration} <span className="text-2xl opacity-30 font-mono uppercase">Min</span></span>
               </div>
               <input 
                 type="range" min="0" max="180" value={duration} 
                 onChange={(e) => setDuration(parseInt(e.target.value))}
                 className="w-full h-3 bg-black rounded-full appearance-none cursor-pointer accent-studio-purple border border-white/10 shadow-inner" 
               />
               <p className="text-mini font-black uppercase text-zinc-700 mt-10 tracking-widest italic opacity-60 uppercase leading-none">8K Cinema Grade Export Lock: 180 Minutes Maximum</p>
            </div>
          </div>
        )}

        {/* PAGES 14-20: PRODUCTION WORKFLOW (SYNCED) */}
        {page === 14 && (
           <div className="p-10 pt-24 flex flex-col h-screen max-w-6xl mx-auto">
             <h1 className="text-5xl font-black uppercase italic text-white mb-16 tracking-widest leading-none">Multi-Layer Composite View</h1>
             <div className="space-y-6">
                {["VFX Cinematic Top Plate", "Green Screen Alpha Mask", "Neural Vocal Synthesis", "Atmospheric SFX Master", "Base Cinema Plate"].map((layer, i) => (
                   <div key={i} className="bg-zinc-950 border-2 border-zinc-900 h-20 rounded-2xl flex items-center px-10 justify-between group hover:border-studio-purple transition-all shadow-xl">
                      <div className="flex items-center gap-6">
                         <Layers size={24} className="text-studio-purple" />
                         <span className="text-xl font-black uppercase text-white/40 group-hover:text-white leading-none tracking-tight italic">{layer}</span>
                      </div>
                      <Eye size={22} className="text-zinc-800 group-hover:text-studio-purple cursor-pointer transition-colors" />
                   </div>
                ))}
             </div>
          </div>
        )}

        {page === 15 && (
          <div className="p-10 pt-24 text-center max-w-7xl mx-auto">
             <h1 className="text-6xl font-black uppercase italic text-studio-purple mb-20 leading-none uppercase">Audio Mastering Station</h1>
             <div className="grid grid-cols-4 md:grid-cols-8 gap-8 mb-20">
                {Array.from({length: 8}).map((_, i) => (
                   <div key={i} className="bg-zinc-950 p-10 rounded-[40px] flex flex-col items-center gap-10 shadow-2xl border border-zinc-900">
                      <div className="h-64 w-3 bg-zinc-900 rounded-full relative overflow-hidden">
                         <div className="absolute bottom-0 w-full bg-studio-purple shadow-glow" style={{height: (Math.random() * 80 + 20) + '%'}} />
                      </div>
                      <Volume2 size={26} className="text-zinc-700" />
                      <span className="text-mini font-black text-white/20 uppercase tracking-widest">CH_{i+1}</span>
                   </div>
                ))}
             </div>
          </div>
        )}

        {page === 16 && (
           <div className="p-10 pt-24 text-center max-w-7xl mx-auto">
              <h1 className="text-6xl font-black uppercase italic text-studio-purple mb-16 leading-none uppercase">Final Production Hub</h1>
              <div className="grid grid-cols-2 gap-12">
                 <div className="bg-zinc-950 border-2 border-studio-purple p-20 rounded-[80px] flex flex-col items-center gap-12 shadow-glow-large backdrop-blur-3xl">
                    <Monitor size={120} className="text-studio-purple animate-pulse" />
                    <button 
                      onClick={() => { setIsRendering(true); setTimeout(() => { setIsRendering(false); setShowShare(true); }, 3000); }} 
                      className="bg-studio-purple text-white px-20 py-6 rounded-3xl font-black uppercase text-4xl active:scale-95 transition-all shadow-glow hover:bg-purple-800 italic"
                    >
                       {isRendering ? "Rendering 8K..." : "GENERATE MASTER"}
                    </button>
                 </div>
                 {showShare && (
                    <div className="bg-zinc-950 border-2 border-zinc-800 p-12 rounded-[60px] flex flex-col items-center animate-in zoom-in backdrop-blur-3xl shadow-3xl">
                       <h3 className="text-3xl font-black uppercase mb-12 tracking-widest opacity-60 italic uppercase">Global Distribution</h3>
                       <div className="grid grid-cols-3 gap-8">
                          {Array.from({length: 6}).map((_, i) => (
                             <button key={i} className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-[30px] flex items-center justify-center hover:bg-studio-purple transition-all text-white active:scale-90 shadow-lg group">
                                <Share2 size={36} className="group-hover:scale-110 transition-transform" />
                             </button>
                          ))}
                       </div>
                    </div>
                 )}
              </div>
           </div>
        )}

        {page === 17 && (
          <div className="p-10 pt-24 max-w-7xl mx-auto text-center">
             <h1 className="text-6xl font-black uppercase italic text-studio-purple mb-16 leading-none">Tutorial Masterclass</h1>
             <div className="grid grid-cols-2 gap-10">
                <div className="aspect-video bg-zinc-900 border-2 border-zinc-800 rounded-[50px] flex items-center justify-center relative group overflow-hidden cursor-pointer shadow-2xl">
                   <Play size={100} className="text-zinc-800 group-hover:text-studio-purple transition-all" />
                   <div className="absolute bottom-10 left-10 text-2xl font-black uppercase text-white/40 tracking-widest italic leading-none">Masterclass 01: Core Logic Architecture</div>
                </div>
                <div className="aspect-video bg-zinc-900 border-2 border-zinc-800 rounded-[50px] flex items-center justify-center relative group overflow-hidden cursor-pointer shadow-2xl">
                   <Play size={100} className="text-zinc-800 group-hover:text-studio-purple transition-all" />
                   <div className="absolute bottom-10 left-10 text-2xl font-black uppercase text-white/40 tracking-widest italic leading-none">Masterclass 02: Advanced Neural VFX</div>
                </div>
             </div>
          </div>
        )}

        {page === 18 && (
          <div className="p-10 pt-24 max-w-5xl mx-auto text-left">
             <h1 className="text-4xl font-black uppercase italic text-studio-purple mb-12 border-b border-studio-purple-dim pb-4 leading-none uppercase">Studio Terms & Legal</h1>
             <div className="space-y-10 text-2xl font-black uppercase text-white/40 leading-relaxed tracking-wider italic">
                <p>1. User generated cinematic content is the sole property of the creator account holder.</p>
                <p>2. MandaStrong Studio provides high-compute neural tools for cinematic synthesis only.</p>
                <p>3. All 8K resolution exports require a verified Studio Master subscription.</p>
                <p>4. Professional commercial use is permitted under the $50 Master Tier licensing only.</p>
             </div>
          </div>
        )}

        {page === 19 && (
           <div className="h-screen flex flex-col justify-center items-center text-center p-10 bg-studio-purple-overlay">
              <MessageCircle size={100} className="text-studio-purple mb-8 animate-pulse shadow-glow" />
              <h1 className="text-studio-title-large font-black uppercase italic tracking-tighter mb-10 text-white drop-shadow-2xl leading-none uppercase">Agent Grok</h1>
              <div className="w-full max-w-5xl bg-zinc-950/80 border-2 border-studio-purple-dim rounded-[60px] p-20 text-center shadow-3xl backdrop-blur-3xl">
                 <p className="text-4xl font-black uppercase italic text-white leading-relaxed mb-16 tracking-tight">
                   "Welcome back. Your Studio Master status is verified. How can I assist your movie making process today?"
                 </p>
                 <div className="flex gap-6 max-w-4xl mx-auto">
                    <input type="text" placeholder="Explain your technical issue..." className="flex-grow bg-black/60 border-2 border-zinc-800 p-6 rounded-2xl font-black text-studio-purple uppercase italic outline-none focus:border-studio-purple transition-all text-xl shadow-inner placeholder:opacity-30" />
                    <button className="bg-studio-purple p-6 rounded-2xl text-white shadow-xl hover:scale-105 active:scale-95 transition-transform shadow-glow"><Send size={32}/></button>
                 </div>
              </div>
           </div>
        )}

        {page === 20 && (
          <div className="p-10 pt-24 max-w-7xl mx-auto text-center">
             <h1 className="text-6xl font-black uppercase italic text-studio-purple mb-20 leading-none uppercase">Community Hub</h1>
             <div className="grid grid-cols-3 gap-10">
                {Array.from({length: 6}).map((_, i) => (
                   <div key={i} className="aspect-video bg-zinc-950 border-2 border-zinc-800 rounded-[40px] p-8 flex flex-col justify-between shadow-2xl hover:border-studio-purple transition-all group active:scale-95">
                      <div className="flex justify-between items-center">
                         <span className="text-mini font-black text-white/30 uppercase tracking-widest italic tracking-[0.2em]">CREATOR_ID_00{i+1}</span>
                         <Heart size={24} className="text-studio-purple fill-studio-purple/20 group-hover:scale-125 transition-transform" />
                      </div>
                      <Play size={50} className="mx-auto text-zinc-800 opacity-40" />
                      <div className="flex justify-between items-center text-zinc-600 leading-none"><span className="text-micro font-black uppercase italic tracking-tighter">Verified Production</span> <span className="text-micro font-bold opacity-30 italic">245 Likes</span></div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {/* PAGE 21: FINALE - THE MISSION */}
        {page === 21 && (
          <div className="h-screen flex flex-col justify-center items-center text-center p-10 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 grayscale">
                  <source src="thatsallfolks.mp4" type="video/mp4" />
               </video>
            </div>
            <div className="relative z-10 space-y-10 max-w-7xl p-16 bg-black/50 backdrop-blur-3xl rounded-[80px] border-2 border-studio-purple-dim shadow-3xl">
               <h1 className="text-studio-finale font-black text-studio-purple uppercase italic mb-2 leading-none tracking-tighter drop-shadow-custom leading-none uppercase">THAT'S ALL FOLKS!</h1>
               <p className="text-4xl md:text-6xl font-black uppercase italic text-white tracking-tight leading-none drop-shadow-lg text-center italic">
                 "Amanda’s Thank you to creators now in future. Supporting cinematic innovation through our Veteran Fundraiser mission."
               </p>
               <div className="pt-12 leading-none">
                  <a href="https://MandaStrong1.Etsy.com" target="_blank" className="inline-block text-7xl md:text-[9rem] font-black text-studio-purple hover:text-white transition-all underline underline-offset-[30px] decoration-8 decoration-studio-purple-dim tracking-tighter leading-none italic">MandaStrong1.Etsy.com</a>
               </div>
            </div>
            <div className="flex gap-10 mt-16 relative z-20">
               <button onClick={() => setPage(1)} className="bg-studio-purple text-white px-24 py-6 rounded-3xl font-black uppercase text-4xl shadow-glow-large hover:scale-105 transition-transform active:scale-95 leading-none italic">HOME</button>
               <button className="bg-zinc-900 border-2 border-zinc-800 text-white/30 px-24 py-6 rounded-3xl font-black uppercase text-4xl hover:bg-zinc-900 transition-all leading-none active:scale-95 italic">CLOSE</button>
            </div>
          </div>
        )}

      </main>

      {/* GLOBAL MASTER DESIGN TOKENS */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --studio-purple: #7e22ce;
          --studio-purple-dim: rgba(126, 34, 206, 0.2);
          --studio-purple-light: rgba(126, 34, 206, 0.7);
          --studio-purple-glow: rgba(126, 34, 206, 0.5);
        }
        .text-studio-purple { color: var(--studio-purple); }
        .bg-studio-purple { background-color: var(--studio-purple); }
        .bg-studio-purple-overlay { background-color: var(--studio-purple-dim); }
        .bg-studio-purple-dim { background-color: var(--studio-purple-dim); }
        .border-studio-purple { border-color: var(--studio-purple); }
        .border-studio-purple-dim { border-color: var(--studio-purple-dim); }
        .border-studio-purple-light { border-color: var(--studio-purple-light); }
        .shadow-glow { box-shadow: 0 0 25px var(--studio-purple-glow); }
        .shadow-glow-large { box-shadow: 0 0 70px var(--studio-purple-glow); }
        .splash-gradient { background: radial-gradient(circle at center, rgba(126, 34, 206, 0.5) 0%, #000 70%); }
        .glyph-icon { color: #52525b; }
        .group:hover .glyph-icon { color: var(--studio-purple); }
        
        .text-micro { font-size: 8px; }
        .text-tiny { font-size: 9px; }
        .text-mini { font-size: 11px; }
        .tracking-widest-plus { letter-spacing: 0.25em; }
        .tracking-widest-ultra { letter-spacing: 0.6em; }
        .h-px-2 { height: 2px; }
        
        .text-studio-landing { font-size: 8.5rem; }
        .text-studio-title { font-size: 11.5rem; }
        .text-studio-title-large { font-size: 11rem; }
        .text-studio-finale { font-size: 16.5rem; }
        .drop-shadow-custom { filter: drop-shadow(0 0 60px rgba(126, 34, 206, 1)); }
        .text-shadow-glow { text-shadow: 0 0 50px var(--studio-purple-glow); }

        @keyframes loading-bar { 0% { width: 0%; } 50% { width: 75%; } 100% { width: 100%; } }
        .animate-loading-bar { animation: loading-bar 2.5s infinite ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--studio-purple); border-radius: 20px; }
        
        input[type=range] { -webkit-appearance: none; background: #111; border-radius: 30px; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 38px; width: 38px; border-radius: 50%; background: var(--studio-purple); cursor: pointer; border: 4px solid white; box-shadow: 0 0 25px var(--studio-purple-glow); }
        
        .shadow-3xl { box-shadow: 0 0 100px rgba(0,0,0,1); }
        .animate-in { animation-duration: 0.7s; animation-fill-mode: both; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .fade-in { animation-name: fade-in; }
      `}} />
    </div>
  );
}