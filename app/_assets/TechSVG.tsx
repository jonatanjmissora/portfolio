import type { SVGProps } from "react";
import * as React from "react";

export const TECHNOS = [
  { name: "Nextjs", svg: <Nextjs className="size-7" /> },
  { name: "Astro", svg: <Astro className="size-7" /> },
  { name: "Svelte", svg: <Svelte className="size-7" /> },
  { name: "Python", svg: <Python className="size-7" /> },
  { name: "Neon", svg: <Neon className="size-7" /> },
  { name: "Mongo", svg: <MongoDB className="size-7" /> },
  { name: "Supa", svg: <Supabase className="size-7" /> },
  { name: "Fire", svg: <Firebase className="size-7" /> },
  { name: "Prisma", svg: <Prisma className="size-7" /> },
  { name: "Drizzle", svg: <Drizzle className="size-7" /> },
  { name: "Git", svg: <Git className="size-7" /> },
  { name: "Nodejs", svg: <Nodejs className="size-7" /> },
  { name: "Hono", svg: <Hono className="size-7" /> },
  { name: "Figma", svg: <Figma className="size-7" /> },
]

function Nextjs(props: SVGProps<SVGSVGElement>) {
  return <svg width="1em" height="1em" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_408_139" style={{
    maskType: "alpha"
  }} maskUnits="userSpaceOnUse" x={0} y={0} width={180} height={180}><circle cx={90} cy={90} r={90} fill="black" /></mask><g mask="url(#mask0_408_139)"><circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} /><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" /><rect x={115} y={54} width={12} height={72} fill="url(#paint1_linear_408_139)" /></g><defs><linearGradient id="paint0_linear_408_139" x1={109} y1={116.5} x2={144.5} y2={160.5} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient><linearGradient id="paint1_linear_408_139" x1={121} y1={54} x2={120.799} y2={106.875} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient></defs></svg>
}

function Astro(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid" {...props}><path fill="currentColor" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z" /><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z" /></svg> }

function Svelte(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 308" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244" fill="#FF3E00" /><path d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398" fill="#FFF" /></svg> }

function Python(props: SVGProps<SVGSVGElement>) { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32" width="1em" height="1em" {...props}><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" /><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" /><defs><linearGradient id="a" x1={19.075} x2={34.898} y1={18.782} y2={34.658} gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8" /><stop offset={1} stopColor="#366994" /></linearGradient><linearGradient id="b" x1={28.809} x2={45.803} y1={28.882} y2={45.163} gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052" /><stop offset={1} stopColor="#FFC331" /></linearGradient></defs></svg> }

function Neon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid" {...props}><defs><linearGradient id="a" x1="100%" x2="12.069%" y1="100%" y2="0%"><stop offset="0%" stopColor="#62F755" /><stop offset="100%" stopColor="#8FF986" stopOpacity={0} /></linearGradient><linearGradient id="b" x1="100%" x2="40.603%" y1="100%" y2="76.897%"><stop offset="0%" stopOpacity={0.9} /><stop offset="100%" stopColor="#1A1A1A" stopOpacity={0} /></linearGradient></defs><path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="url(#a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="url(#b)" fillOpacity={0.4} d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z" /></svg> }

function MongoDB(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid" {...props}><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" /></svg> }

function Supabase(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)" /><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity={0.2} /><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" /><defs><linearGradient id="paint0_linear" x1={53.9738} y1={54.974} x2={94.1635} y2={71.8295} gradientUnits="userSpaceOnUse"><stop stopColor="#249361" /><stop offset={1} stopColor="#3ECF8E" /></linearGradient><linearGradient id="paint1_linear" x1={36.1558} y1={30.578} x2={54.4844} y2={65.0806} gradientUnits="userSpaceOnUse"><stop /><stop offset={1} stopOpacity={0} /></linearGradient></defs></svg> }

function Firebase(props: SVGProps<SVGSVGElement>) { return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 600 600" {...props}><path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z" /><path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z" /><path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z" /><path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z" /></svg> }

function Prisma(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 310" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path fill="currentColor" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z" /></svg> }

function Drizzle(props: SVGProps<SVGSVGElement>) { return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 160 160" {...props}><rect width={9.631} height={40.852} fill="#01EC64" rx={4.816} transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)" /><rect width={9.631} height={40.852} fill="#01EC64" rx={4.816} transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)" /><rect width={9.631} height={40.852} fill="#01EC64" rx={4.816} transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)" /><rect width={9.631} height={40.852} fill="#01EC64" rx={4.816} transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)" /></svg> }

function Git(props: SVGProps<SVGSVGElement>) { return <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="1em" height="1em" {...props}><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36" /></svg> }

function Nodejs(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" {...props}><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873F" /><stop offset="32.88%" stopColor="#418B3D" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3FA92D" /><stop offset="100%" stopColor="#3FAE2A" /></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873F" /><stop offset="40.32%" stopColor="#54A044" /><stop offset="71.36%" stopColor="#66B848" /><stop offset="90.81%" stopColor="#6CC04A" /></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6CC04A" /><stop offset="28.64%" stopColor="#66B848" /><stop offset="59.68%" stopColor="#54A044" /><stop offset="86.24%" stopColor="#41873F" /></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><mask id="d" fill="#fff"><use xlinkHref="#b" /></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)" /><mask id="g" fill="#fff"><use xlinkHref="#e" /></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)" /></svg> }

function Hono(props: SVGProps<SVGSVGElement>) { return <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 330" width="1em" height="1em" {...props}><path d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862 18.037 48.108 8.65 89.963-28.16 125.564-32.209 27.22-69.314 37.822-111.318 31.805-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838 4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289C82.06 72.01 106.135 34.685 134.13.029Z" fill="#FF5B11" opacity={0.993} /><path d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169-25.367 17.85-53.196 23.15-83.488 15.902-32.666-10.136-51.55-32.113-56.653-65.929-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z" fill="#FF9758" /></svg> }

function Figma(props: SVGProps<SVGSVGElement>) { return <svg width="1em" height="1em" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_912_3)"><path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" /><path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" /><path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" /><path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" /><path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_912_3"><rect width={53.3333} height={80} fill="white" /></clipPath></defs></svg> }

