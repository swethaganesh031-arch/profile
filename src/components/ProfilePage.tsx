import { User, Award, TrendingUp, Target, Settings, Globe, Volume2, Calendar, Crown, LogOut, Edit3, Flame, Star, Lock, Unlock, Trophy, BookOpen, Clock, CheckCircle, Bell, Moon, Shield } from 'lucide-react';
import { useState } from 'react';

function ProfilePage() {
  const [userLevel] = useState('Intermediate');
  const [streak] = useState(15);
  const [xpPoints] = useState(2847);
  const [overallProgress] = useState(67);
  const [vocabularyProgress] = useState(75);
  const [grammarProgress] = useState(65);
  const [speakingProgress] = useState(58);
  const [listeningProgress] = useState(72);
  const [readingProgress] = useState(70);
  const [dailyGoal] = useState(20);
  const [goalCompleted] = useState(15);
  const [wordsLearned] = useState(1247);
  const [accuracy] = useState(89);
  const [quizAverage] = useState(85);

  const achievements = [
    { id: 1, name: 'First Steps', icon: Star, unlocked: true, color: 'text-yellow-300' },
    { id: 2, name: '7 Day Streak', icon: Flame, unlocked: true, color: 'text-orange-400' },
    { id: 3, name: '500 Words', icon: BookOpen, unlocked: true, color: 'text-blue-400' },
    { id: 4, name: 'Quiz Master', icon: Trophy, unlocked: true, color: 'text-purple-400' },
    { id: 5, name: '30 Day Streak', icon: Flame, unlocked: false, color: 'text-gray-400' },
    { id: 6, name: '1000 Words', icon: BookOpen, unlocked: false, color: 'text-gray-400' },
  ];

  const weeklyData = [
    { day: 'Mon', hours: 1.5 },
    { day: 'Tue', hours: 2.0 },
    { day: 'Wed', hours: 1.2 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 1.8 },
    { day: 'Sat', hours: 3.0 },
    { day: 'Sun', hours: 2.2 },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN0YwMEZGO3N0b3Atb3BhY2l0eTowLjIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTAwRkY7c3RvcC1vcGFjaXR5OjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZmlsbD0idXJsKCNnbG93KSIvPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 shadow-lg shadow-violet-500/50">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="w-16 h-16 text-violet-300" />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-violet-600 hover:bg-violet-500 p-2 rounded-full shadow-lg transition-all">
                <Edit3 className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Alex Johnson
                </h1>
                <Crown className="w-6 h-6 text-yellow-400 drop-shadow-glow" />
              </div>
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mb-4">
                <span className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-violet-500/50">
                  {userLevel}
                </span>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-bold">{streak} Day Streak</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-bold">{xpPoints} XP</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/50">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-violet-300" />
              <h2 className="text-2xl font-bold text-white">Learning Progress</h2>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-violet-200">Overall Progress</span>
                <span className="text-white font-bold">{overallProgress}%</span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full shadow-lg shadow-violet-500/50 transition-all duration-1000"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Vocabulary', value: vocabularyProgress },
                { name: 'Grammar', value: grammarProgress },
                { name: 'Speaking', value: speakingProgress },
                { name: 'Listening', value: listeningProgress },
                { name: 'Reading', value: readingProgress },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-2">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.value / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7F00FF" />
                          <stop offset="100%" stopColor="#E100FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.value}%</span>
                    </div>
                  </div>
                  <span className="text-violet-200 text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-violet-300" />
              <h2 className="text-2xl font-bold text-white">Achievements & Badges</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`relative flex flex-col items-center p-4 rounded-2xl backdrop-blur-sm border transition-all ${
                      achievement.unlocked
                        ? 'bg-white/20 border-white/30 hover:bg-white/30 shadow-lg shadow-violet-500/30'
                        : 'bg-white/5 border-white/10 opacity-50'
                    }`}
                  >
                    {!achievement.unlocked && (
                      <Lock className="absolute top-2 right-2 w-4 h-4 text-gray-400" />
                    )}
                    <Icon className={`w-8 h-8 mb-2 ${achievement.color}`} />
                    <span className="text-xs text-white text-center font-medium">{achievement.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-violet-200 text-sm">Leaderboard</span>
                </div>
                <p className="text-2xl font-bold text-white">#47</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-violet-200 text-sm">Lessons</span>
                </div>
                <p className="text-2xl font-bold text-white">142</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-violet-200 text-sm">Practice Time</span>
                </div>
                <p className="text-2xl font-bold text-white">87h</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-violet-200 text-sm">Certificates</span>
                </div>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-violet-300" />
            <h2 className="text-2xl font-bold text-white">Performance Analytics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-violet-200 mb-4">Weekly Progress</h3>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyData.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-white/10 rounded-t-lg relative overflow-hidden backdrop-blur-sm border border-white/20" style={{ height: `${(day.hours / maxHours) * 100}%` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/50"></div>
                    </div>
                    <span className="text-xs text-violet-200">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-violet-200 text-sm">Words Learned</span>
                <p className="text-3xl font-bold text-white mt-1">{wordsLearned}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-violet-200 text-sm">Accuracy</span>
                <p className="text-3xl font-bold text-white mt-1">{accuracy}%</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-violet-200 text-sm">Mistakes Fixed</span>
                <p className="text-3xl font-bold text-white mt-1">73%</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-violet-200 text-sm">Quiz Average</span>
                <p className="text-3xl font-bold text-white mt-1">{quizAverage}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-violet-300" />
              <h2 className="text-2xl font-bold text-white">Daily Goals</h2>
            </div>

            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-violet-200">Learn {dailyGoal} words today</span>
                <span className="text-white font-bold">{goalCompleted}/{dailyGoal}</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
                  style={{ width: `${(goalCompleted / dailyGoal) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold ${
                    i < 5
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                      : i === 5
                      ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50'
                      : 'bg-white/10 text-violet-200 border border-white/20'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-violet-300" />
                <span className="text-white">Daily Reminder</span>
              </div>
              <button className="w-12 h-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full relative shadow-lg shadow-violet-500/50">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>

          <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-violet-300" />
              <h2 className="text-2xl font-bold text-white">Language Preferences</h2>
            </div>

            <div className="space-y-4">
              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <label className="text-violet-200 text-sm block mb-2">Native Language</label>
                <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <label className="text-violet-200 text-sm block mb-2">Learning Language</label>
                <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>English</option>
                </select>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <label className="text-violet-200 text-sm block mb-2">Accent Preference</label>
                <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>US English</option>
                  <option>UK English</option>
                  <option>Australian English</option>
                </select>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <label className="text-violet-200 text-sm block mb-2">Difficulty Level</label>
                <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="w-6 h-6 text-violet-300" />
            <h2 className="text-2xl font-bold text-white">Practice Preferences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Voice Input Enabled', enabled: true },
              { label: 'Pronunciation Feedback', enabled: true },
              { label: 'Auto Grammar Correction', enabled: false },
              { label: 'Spelling Check', enabled: true },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-white">{pref.label}</span>
                <button className={`w-12 h-6 rounded-full relative transition-all ${
                  pref.enabled
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/50'
                    : 'bg-white/20'
                }`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    pref.enabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-3xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-violet-300" />
            <h2 className="text-2xl font-bold text-white">Settings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/20 text-white transition-all">
              <Shield className="w-5 h-5 text-violet-300" />
              <span>Change Password</span>
            </button>
            <button className="flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/20 text-white transition-all">
              <Bell className="w-5 h-5 text-violet-300" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/20 text-white transition-all">
              <Moon className="w-5 h-5 text-violet-300" />
              <span>Dark Mode</span>
            </button>
            <button className="flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/20 text-white transition-all">
              <Shield className="w-5 h-5 text-violet-300" />
              <span>Privacy Settings</span>
            </button>
            <button className="flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/20 text-white transition-all">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span>Upgrade to Premium</span>
            </button>
            <button className="flex items-center gap-3 backdrop-blur-sm bg-red-500/20 hover:bg-red-500/30 p-4 rounded-xl border border-red-500/30 text-red-200 transition-all">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
