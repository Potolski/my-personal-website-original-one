export default function ThemeInit() {
  const code = `(function(){try{var s=localStorage.getItem('dp-theme');var d=document.documentElement;if(s){d.setAttribute('data-theme',s);}else if(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches){d.setAttribute('data-theme','dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
