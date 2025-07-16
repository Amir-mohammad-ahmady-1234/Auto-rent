import { FiWifiOff, FiRefreshCw } from 'react-icons/fi';

const NotBlogsFounded = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-[40vh] items-center justify-center p-8">
      <div className="animate-fade-in">
        <div className="from-error-secondary to-background border-destructive/20 shadow-error relative rounded-2xl border bg-gradient-to-br p-8 backdrop-blur-sm">
          {/* Floating icon */}
          <div className="-float mb-6 flex justify-center">
            <div className="bg-gradient-error rounded-full p-4 shadow-lg">
              <FiWifiOff className="h-8 w-8 text-black" />
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-4 text-center">
            <h2 className="text-foreground text-2xl font-bold">
              No Blogs Found
            </h2>
            <p className="text-muted-foreground mx-auto max-w-sm text-sm">
              Connection issue detected. Please check your network and try
              again.
            </p>

            {/* Action button */}
            <div className="pt-4">
              <button
                onClick={handleRefresh}
                className="animate-pulse-glow border-info hover:bg-info flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400"
              >
                <FiRefreshCw className="mr-2 h-4 w-4" />
                Retry
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="bg-gradient-error absolute -top-2 -right-2 h-4 w-4 rounded-full opacity-70"></div>
          <div className="bg-gradient-info absolute -bottom-1 -left-1 h-3 w-3 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default NotBlogsFounded;
