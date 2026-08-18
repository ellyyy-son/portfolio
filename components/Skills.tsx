import { BsFileBarGraph } from "react-icons/bs";
import { SiTableau, SiPandas, SiNumpy, SiGraphite, SiPlotly, SiApachespark, SiApachehadoop, SiApachehive, SiPython, SiMysql, SiR, SiJavascript, SiCplusplus, SiGit,
  SiReact, SiNextdotjs, SiFlask, SiDjango,SiNodedotjs, SiExpress, SiGooglebigquery, SiScikitlearn, SiPytorch
  } from "react-icons/si";
import { MdOutlineAutoGraph } from "react-icons/md";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { FaJava, FaRegFileExcel, FaGoogle, FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { TbBusinessplan, TbSettingsCog } from "react-icons/tb";

export default function Skills() {
  return (
    <Tabs aria-label="Default tabs" variant="pills"  className="justify-center">
      <TabItem active title="Business Intelligence" icon={TbBusinessplan}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Power BI</h1>
              <BsFileBarGraph size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Tableau</h1>
              <SiTableau size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Pandas</h1>
              <SiPandas size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">NumPy</h1>
              <SiNumpy size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Matplotlib</h1>
              <SiGraphite size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Seaborn</h1>
              <MdOutlineAutoGraph size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Plotly</h1>
              <SiPlotly size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">scikit-learn</h1>
              <SiScikitlearn size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">PyTorch</h1>
              <SiPytorch size={40} className="text-[#00f0ff]"/>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 gap-6 items-center justify-center">
            <span className="px-3 py-1 bg-[#00f0ff]/20 rounded-full text-white">Data Modeling</span>
            <span className="px-3 py-1 bg-[#00f0ff]/20 rounded-full text-white">Dashboard Design</span>
            <span className="px-3 py-1 bg-[#00f0ff]/20 rounded-full text-white">KPI Reporting</span>
            <span className="px-3 py-1 bg-[#00f0ff]/20 rounded-full text-white">Data Visualization</span>
            <span className="px-3 py-1 bg-[#00f0ff]/20 rounded-full text-white">Applied Machine Learning</span>
         </div>
      </div>
      </TabItem>
      <TabItem title="Big Data" icon={SiGooglebigquery}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Apache Spark</h1>
              <SiApachespark size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Hadoop</h1>
              <SiApachehadoop size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Hive</h1>
              <SiApachehive size={40} className="text-[#00f0ff]"/>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="Programming" icon={MdComputer}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Python</h1>
              <SiPython size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">SQL</h1>
              <SiMysql size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">R</h1>
              <SiR size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Javascript</h1>
              <SiJavascript size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Java</h1>
              <FaJava size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">C++</h1>
              <SiCplusplus size={40} className="text-[#00f0ff]"/>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="Tools" icon={FaTools}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Git</h1>
              <SiGit size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">VSCode</h1>
              <VscVscode size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Microsoft Excel</h1>
              <FaRegFileExcel size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Microsoft Office Suite</h1>
              <TiVendorMicrosoft size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Google Workspace</h1>
              <FaGoogle size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">GCloud Platform</h1>
              <DiGoogleCloudPlatform size={40} className="text-[#00f0ff]"/>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="Frameworks" icon={TbSettingsCog}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">React</h1>
              <SiReact size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Next.js</h1>
              <SiNextdotjs size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Flask</h1>
              <SiFlask size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Django</h1>
              <SiDjango size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Node.js</h1>
              <SiNodedotjs size={40} className="text-[#00f0ff]"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white">Express</h1>
              <SiExpress size={40} className="text-[#00f0ff]"/>
            </div>
          </div>
        </div>
      </TabItem>
    </Tabs>
  );
}
