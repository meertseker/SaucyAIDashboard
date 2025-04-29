import { ReactNode } from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#060711] text-white font-['Nunito'] p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute w-[683px] h-[683px] -left-52 top-1/2 bg-blue-500 opacity-20 blur-[222px]" />
      <div className="absolute w-[683px] h-[683px] right-0 -top-32 bg-blue-500 opacity-20 blur-[222px]" />
      
      {/* Main layout container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="hidden md:block fixed left-4 top-4 bottom-4 w-20 bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-3xl p-4">
          <div className="flex flex-col items-center gap-8 h-full">
            <div className="bg-gradient-to-r from-[#8974FF] to-[#149CFD] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-white">⚡</span>
            </div>
            <div className="w-full h-px bg-white/20" />
            <div className="flex flex-col gap-8">
              <button className="text-white/50 hover:text-white transition-colors">
                {/* Dashboard icon */}
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                  {/* Add your icon path here */}
                </svg>
              </button>
              {/* Add other sidebar icons similarly */}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:ml-24 lg:ml-28">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Product Sales Dashboard</h1>
            <div className="flex gap-4">
              <IconButton icon="calendar" />
              <IconButton icon="chat" />
              <IconButton icon="bell" />
              <ProfileButton />
            </div>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Section */}
              <div className="bg-[rgba(99,117,197,0.1)] backdrop-blur-[27.79px] rounded-3xl p-6">
                <h2 className="text-xl mb-4">Record Your Vocals</h2>
                <UploadArea />
                <UploadArea label="Upload Your Beat (Optional)" className="mt-4" />
              </div>

              {/* Analytics Section */}
              <div className="bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-3xl p-6">
                <h3 className="text-lg mb-4">Your Vocal Analysis</h3>
                <AnalysisTable />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Sales Card */}
              <div className="bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Total Sales</h3>
                  <span className="text-sm text-white/60">Last 30 days</span>
                </div>
                <div className="text-4xl font-bold">$90,744</div>
                <div className="mt-4 h-32 bg-white/10 rounded-lg">
                  {/* Chart placeholder */}
                </div>
              </div>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-4">
                <MiniCard title="Revenue Trend" value="5.33" />
                <MiniCard title="Active Users" value="1.2k" />
              </div>
            </div>
          </div>

          {/* Bottom Chart Section */}
          <div className="mt-8 bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg">Revenue Overview</h3>
              <div className="flex gap-4 text-sm">
                <span>1.2 Min</span>
                <span>5.33 Max</span>
                <span>2.43 Avg</span>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-r from-[#8974FF] to-[#149CFD] rounded-lg">
              {/* Chart placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable components
const IconButton = ({ icon }: { icon: string }) => (
  <button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    {/* Add icon implementation */}
  </button>
);

const ProfileButton = () => (
  <div className="w-14 h-14 rounded-full bg-white/10 overflow-hidden">
    {/* Profile image */}
  </div>
);

const UploadArea = ({ label, className }: { label?: string; className?: string }) => (
  <div className={`border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/40 transition-colors ${className}`}>
    <div className="text-white/60">{label || 'Drag & Drop here'}</div>
    <button className="mt-2 text-blue-400">Or Browse Files</button>
  </div>
);

const AnalysisTable = () => (
  <table className="w-full">
    <thead>
      <tr className="text-left text-white/60">
        <th>32DhZ Min</th>
        <th>8KhZ Min</th>
        <th>5.4MHz Avg</th>
        <th>0.23 Unabsent</th>
        <th>Yes Share</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>25dB</td>
        <td>6dB</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
);

const MiniCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] p-4 rounded-xl">
    <div className="text-sm text-white/60">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
  </div>
);

export default Dashboard;