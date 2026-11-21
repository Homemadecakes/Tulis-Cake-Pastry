// Tuli's Cake & Pastry — product, WhatsApp, review gallery and Google Sheets
const PRODUCTS = [{"id":"cake-01","name":"মিনিমাল হার্ট লাভ কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-020.jpg","status":"TRUE","price":""},{"id":"cake-02","name":"নীল হার্ট ও লাল গোলাপ কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-021.jpg","status":"TRUE","price":""},{"id":"cake-03","name":"গোলাপি মোড়কে গোলাপের তোড়া","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-022.jpg","status":"TRUE","price":""},{"id":"cake-04","name":"নীল-গোলাপি মোড়কে গোলাপের তোড়া","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-023.jpg","status":"TRUE","price":""},{"id":"cake-05","name":"সাদা ডেইজি ফুল কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-024.jpg","status":"TRUE","price":""},{"id":"cake-06","name":"ডেইজি ও গোল্ডেন ক্যান্ডেল কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-025.jpg","status":"TRUE","price":""},{"id":"cake-07","name":"লাল গোলাপ ও হার্ট কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-026.jpg","status":"TRUE","price":""},{"id":"cake-08","name":"সাদা গোল্ডেন শুভেচ্ছা কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-027.jpg","status":"TRUE","price":""},{"id":"cake-09","name":"কেক ডিজাইন ০৯","category":"custom","description":"আপনার পছন্দের থিম, রং ও ডিজাইনে কাস্টমাইজড কেক।","image":"assets/cake-09.jpg","price":"","availability":"Available","status":"TRUE"},{"id":"cake-10","name":"কালো মোড়কে লাল গোলাপের তোড়া","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-028.jpg","status":"TRUE","price":""},{"id":"cake-11","name":"ল্যাভেন্ডার বাটারফ্লাই কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-029.jpg","status":"TRUE","price":""},{"id":"cake-12","name":"বেগুনি গোলাপের জন্মদিন কেক","category":"birthday","description":"জন্মদিন ও বিশেষ মুহূর্তের জন্য যত্নে তৈরি।","image":"assets/embedded-030.jpg","status":"TRUE","price":""},{"id":"cake-13","name":"হার্ট ও গোলাপি ফুলের কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-031.jpg","status":"TRUE","price":""},{"id":"cake-14","name":"ছবিসহ নীল বর্ডার কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-032.jpg","status":"TRUE","price":""},{"id":"cake-15","name":"লাল ক্রিম বর্ডার কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-033.jpg","status":"TRUE","price":""},{"id":"cake-16","name":"তিন স্বাদের মিনি কেক সেট","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-034.jpg","status":"TRUE","price":""},{"id":"cake-17","name":"লাল-সাদা শুভেচ্ছা কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-035.jpg","status":"TRUE","price":""},{"id":"cake-18","name":"হলুদ ফুলের মিনিমাল কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-036.jpg","status":"TRUE","price":""},{"id":"cake-19","name":"প্রজাপতি ফেয়ারি থিম কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-037.jpg","status":"TRUE","price":""},{"id":"cake-20","name":"গোল্ডেন টপিং সেলিব্রেশন কেক","category":"floral","description":"উপহার ও বিশেষ আয়োজনের জন্য সুন্দর ডিজাইন।","image":"assets/embedded-038.jpg","status":"TRUE","price":""},{"id":"cake-21","name":"সবুজ ফুটবল থিম কেক","category":"custom","description":"আপনার পছন্দের থিম, রং ও ডিজাইনে কাস্টমাইজড কেক।","image":"assets/embedded-039.jpg","status":"TRUE","price":""},{"id":"cake-22","name":"চেরি টপিং সাদা কেক","category":"custom","description":"আপনার পছন্দের থিম, রং ও ডিজাইনে কাস্টমাইজড কেক।","image":"assets/embedded-040.jpg","status":"TRUE","price":""},{"id":"cake-23","name":"লাল হার্ট ছড়ানো কেক","category":"custom","description":"আপনার পছন্দের থিম, রং ও ডিজাইনে কাস্টমাইজড কেক।","image":"assets/embedded-041.jpg","status":"TRUE","price":""},{"id":"cake-24","name":"সবুজ রেসিং কার থিম কেক","category":"custom","description":"আপনার পছন্দের থিম, রং ও ডিজাইনে কাস্টমাইজড কেক।","image":"assets/embedded-042.jpg","status":"TRUE","price":""},{"id":"cake-25","name":"কার্টুন গার্ল পিংক ফ্লোরাল কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-043.jpg","status":"TRUE","price":""},{"id":"cake-26","name":"পিঙ্ক প্রিন্সেস টু-টিয়ার কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-044.jpg","status":"TRUE","price":""},{"id":"cake-27","name":"নেভি ব্লু স্টার কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-045.jpg","status":"TRUE","price":""},{"id":"cake-28","name":"সাদা কেক ও কালো গোলাপের উপহার সেট","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-046.jpg","status":"TRUE","price":""},{"id":"cake-29","name":"পিংক গোলাপের উপহার তোড়া","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-047.jpg","status":"TRUE","price":""},{"id":"cake-30","name":"লাল গোলাপের তোড়া ও কেক সেট","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-048.jpg","status":"TRUE","price":""},{"id":"cake-31","name":"কালো মোড়কে সাদা গোলাপের তোড়া","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-049.jpg","status":"TRUE","price":""},{"id":"cake-32","name":"নীল মোড়কে পিংক গোলাপের তোড়া","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-050.jpg","status":"TRUE","price":""},{"id":"cake-33","name":"সফট পিংক রোজ বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-051.jpg","status":"TRUE","price":""},{"id":"cake-34","name":"হার্টবিট লাভ কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-052.jpg","status":"TRUE","price":""},{"id":"cake-35","name":"গ্রিন লিফ মিনিমাল কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-053.jpg","status":"TRUE","price":""},{"id":"cake-36","name":"পিংক রোজ গার্ডেন কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-054.jpg","status":"TRUE","price":""},{"id":"cake-37","name":"ল্যাভেন্ডার ফ্লোরাল কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-055.jpg","status":"TRUE","price":""},{"id":"cake-38","name":"বাটারফ্লাই বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-056.jpg","status":"TRUE","price":""},{"id":"cake-39","name":"ব্লু সুইর্ল রোজ কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-057.jpg","status":"TRUE","price":""},{"id":"cake-40","name":"অরেঞ্জ স্লাইস কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-058.jpg","status":"TRUE","price":""},{"id":"cake-41","name":"ইয়েলো ডেইজি কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-059.jpg","status":"TRUE","price":""},{"id":"cake-42","name":"পিংক রোজ নাম লেখা কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-060.jpg","status":"TRUE","price":""},{"id":"cake-43","name":"হার্ট অ্যানিভার্সারি কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-061.jpg","status":"TRUE","price":""},{"id":"cake-44","name":"১০ বছর পূর্তি অ্যানিভার্সারি কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-062.jpg","status":"TRUE","price":""},{"id":"cake-45","name":"পার্পল বাটারফ্লাই পার্ল কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-063.jpg","status":"TRUE","price":""},{"id":"cake-46","name":"লাল ফুলের শুভেচ্ছা কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-064.jpg","status":"TRUE","price":""},{"id":"cake-47","name":"হাসব্যান্ড বার্থডে হার্ট কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-065.jpg","status":"TRUE","price":""},{"id":"cake-48","name":"স্মাইলি মিনিমাল কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-066.jpg","status":"TRUE","price":""},{"id":"cake-49","name":"রেড হার্ট বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-067.jpg","status":"TRUE","price":""},{"id":"cake-50","name":"কার্টুন থিম বার্থডে কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-068.jpg","status":"TRUE","price":""},{"id":"cake-51","name":"টেডি বিয়ার টু-টিয়ার কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-069.jpg","status":"TRUE","price":""},{"id":"cake-52","name":"নূর পার্পল নেম কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-070.jpg","status":"TRUE","price":""},{"id":"cake-53","name":"সাদাব গোল্ডেন নেম কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-071.jpg","status":"TRUE","price":""},{"id":"cake-54","name":"হলুদ লিলি ফুলের উপহার তোড়া","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-072.jpg","status":"TRUE","price":""},{"id":"cake-55","name":"লিটল হার্টস বাটারফ্লাই কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-073.jpg","status":"TRUE","price":""},{"id":"cake-56","name":"ব্লু কিউট থিম কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-074.jpg","status":"TRUE","price":""},{"id":"cake-57","name":"ইয়েলো স্মাইলি কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-075.jpg","status":"TRUE","price":""},{"id":"cake-58","name":"বিউটিফুল হার্ট বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-076.jpg","status":"TRUE","price":""},{"id":"cake-59","name":"টেডি বিয়ার বেবি কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-077.jpg","status":"TRUE","price":""},{"id":"cake-60","name":"ফেয়ারি প্রিন্সেস কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-078.jpg","status":"TRUE","price":""},{"id":"cake-61","name":"ব্লু স্টার সেলিব্রেশন কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-079.jpg","status":"TRUE","price":""},{"id":"cake-62","name":"হাফ-ইয়ার বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-080.jpg","status":"TRUE","price":""},{"id":"cake-63","name":"পিঙ্ক প্রিন্সেস গোল্ডেন কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-081.jpg","status":"TRUE","price":""},{"id":"cake-64","name":"ডয়া থ্রি-টিয়ার কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-082.jpg","status":"TRUE","price":""},{"id":"cake-65","name":"চকলেট ওরিও কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-083.jpg","status":"TRUE","price":""},{"id":"cake-66","name":"ফার্স্ট টুথ পিংক কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-084.jpg","status":"TRUE","price":""},{"id":"cake-67","name":"ব্লু রোজ বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-085.jpg","status":"TRUE","price":""},{"id":"cake-68","name":"হার্ট শেপ মিনিমাল কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-086.jpg","status":"TRUE","price":""},{"id":"cake-69","name":"গোল্ডেন বাটারফ্লাই কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-087.jpg","status":"TRUE","price":""},{"id":"cake-70","name":"ওয়াটারমেলন থিম কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-088.jpg","status":"TRUE","price":""},{"id":"cake-71","name":"রেড চেরি ফ্লোরাল কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-089.jpg","status":"TRUE","price":""},{"id":"cake-72","name":"হোয়াইট হার্ট স্মাইলি কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-090.jpg","status":"TRUE","price":""},{"id":"cake-73","name":"মারমেইড বাটারফ্লাই কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-091.jpg","status":"TRUE","price":""},{"id":"cake-74","name":"পিংক বার্থডে ক্রাউন কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-092.jpg","status":"TRUE","price":""},{"id":"cake-75","name":"হার্টস লাভ কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-093.jpg","status":"TRUE","price":""},{"id":"cake-76","name":"হোয়াইট রোজ বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-094.jpg","status":"TRUE","price":""},{"id":"cake-77","name":"ব্লু পেটাল ফ্লোরাল কেক","category":"floral","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-095.jpg","status":"TRUE","price":""},{"id":"cake-78","name":"পিংক রোজ বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-096.jpg","status":"TRUE","price":""},{"id":"cake-79","name":"স্টিক ফিগার ফান কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-097.jpg","status":"TRUE","price":""},{"id":"cake-80","name":"সরি-মাহি কাপকেক সেট","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-098.jpg","status":"TRUE","price":""},{"id":"cake-81","name":"পিংক রোজেট বার্থডে কেক","category":"birthday","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-099.jpg","status":"TRUE","price":""},{"id":"cake-82","name":"মিনি পিজ্জা থিম কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-100.jpg","status":"TRUE","price":""},{"id":"cake-83","name":"শ্রেক কার্টুন থিম কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-101.jpg","status":"TRUE","price":""},{"id":"cake-84","name":"ল্যাভেন্ডার বাটারফ্লাই কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-102.jpg","status":"TRUE","price":""},{"id":"cake-85","name":"ফ্রুট কাস্টার্ড ডেজার্ট কাপ","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-103.jpg","status":"TRUE","price":""},{"id":"cake-86","name":"মারমেইড প্রিন্সেস কেক","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-104.jpg","status":"TRUE","price":""},{"id":"cake-87","name":"ডাবল ফ্লেভার ডেজার্ট কাপ","category":"custom","description":"আপনার বিশেষ আয়োজন ও পছন্দ অনুযায়ী যত্নে তৈরি।","image":"assets/embedded-105.jpg","status":"TRUE","price":""}];

// ===== সেটিংস =====
const WA='https://wa.me/8801982561926';
const SITE_URL='https://tiredmanmehhh-jpg.github.io/tulis-cake-pastry/';
// Google Apps Script API (Google Sheet: "Products") — নতুন URL
const SHEET_API_URL="https://script.google.com/macros/s/AKfycbzEz7RReKz2sNJoybR01iKQGDrE6Nv2NjtI8i5BO8yfbtlHkEpzMr6W5Rs4NHZO7cD1xQ/exec";
const SHEET_CACHE_KEY='tulis_sheet_products_v1';
const SHEET_TIMEOUT_MS=15000;
const SHEET_REFRESH_AFTER_MS=120000;
// true করলে: Sheet-এর API-তে যে কেকের id নেই, সেটি ওয়েবসাইটে লুকিয়ে যাবে (সাধারণত false রাখুন)
const HIDE_PRODUCTS_MISSING_FROM_SHEET=false;
const PAGE_SIZE=8;
let visibleCount=PAGE_SIZE;
let activeFilter='all';
let sheetState='loading'; // loading | ready | failed
let sheetLoading=false,lastSheetLoad=0,currentCakeId=null;

// ===== ছোট সহায়ক ফাংশন =====
const $=id=>document.getElementById(id);
const bn=n=>Number(n).toLocaleString('bn-BD');
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
function normText(v){return String(v??'').replace(/[_\-]+/g,' ').replace(/\s+/g,' ').trim().toUpperCase();}
function toAsciiDigits(s){return String(s).replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));}
// Sheet-এ ৩০০, "300", "৩০০", "৩০০ টাকা", "৳300" — সব ঠিকভাবে পড়বে
function parsePrice(v){
  if(v===''||v==null||typeof v==='boolean')return null;
  if(typeof v==='number')return Number.isFinite(v)&&v>0?v:null;
  const n=Number(toAsciiDigits(v).replace(/[,\s৳]|tk|taka|টাকা/gi,''));
  return Number.isFinite(n)&&n>0?n:null;
}

// ===== প্রোডাক্টের অবস্থা: Available / Not Available, status TRUE / FALSE =====
const UNAVAILABLE_VALUES=['NOT AVAILABLE','NOTAVAILABLE','UNAVAILABLE','FALSE','NO','N/A','SOLD OUT','SOLDOUT','OUT OF STOCK','STOCK OUT'];
const HIDDEN_STATUS_VALUES=['FALSE','NO','0','HIDDEN','HIDE','INACTIVE'];
function isAvailable(p){return p.availability!==false&&!UNAVAILABLE_VALUES.includes(normText(p.availability));}
function isVisibleProduct(p){
  if(HIDE_PRODUCTS_MISSING_FROM_SHEET&&p._missing)return false;
  if(p.status===false)return false;
  return !HIDDEN_STATUS_VALUES.includes(normText(p.status));
}
function fixedPrice(p){
  const n=parsePrice(p.price);
  return n===null?'':`${bn(n)} ৳ — ১ পাউন্ডের দাম`;
}
function priceFallbackText(){return sheetState==='loading'?'দাম লোড হচ্ছে…':'দাম জানতে যোগাযোগ করুন';}
function productOrder(){
  return PRODUCTS.filter(isVisibleProduct).slice().sort((a,b)=>Number(isAvailable(b))-Number(isAvailable(a)));
}

// ===== কেক কার্ড রেন্ডার =====
function renderProducts(keepCount){
  const grid=$('cakeGrid');if(!grid)return;
  grid.innerHTML=productOrder().map(p=>{
    const available=isAvailable(p),price=fixedPrice(p);
    return `<article class="cake-card ${available?'':'is-unavailable'}" data-category="${esc(p.category)}" data-name="${esc(p.name)}" data-available="${available?'yes':'no'}">
      <div class="cake-image-wrap"><img class="cake-img" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" data-open="${esc(p.id)}">${available?'':'<span class="availability-ribbon">Not Available</span>'}</div>
      <div class="cake-meta"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="cake-bottom">${available?`<span class="price">${price||priceFallbackText()}</span>`:'<span class="unavailable-text">Not Available</span>'}${available?`<button class="order-mini" data-open="${esc(p.id)}">বিস্তারিত</button>`:'<button class="order-mini unavailable-btn" type="button" disabled>Not Available</button>'}</div></div>
    </article>`;
  }).join('');
  if(!keepCount)visibleCount=PAGE_SIZE;
  applyFilters();
}

// ===== সার্চ, ক্যাটাগরি ফিল্টার, আরও দেখুন =====
function applyFilters(){
  const searchEl=$('cakeSearch');
  const q=(searchEl?searchEl.value:'').trim().toLocaleLowerCase('bn');
  const cards=Array.from(document.querySelectorAll('.cake-card'));
  const matches=cards.filter(c=>(activeFilter==='all'||c.dataset.category===activeFilter)&&(!q||c.dataset.name.toLocaleLowerCase('bn').includes(q)));
  cards.forEach(c=>c.classList.add('hide'));
  matches.slice(0,visibleCount).forEach(c=>c.classList.remove('hide'));
  const empty=$('emptyState');if(empty)empty.style.display=matches.length?'none':'block';
  const wrap=$('loadMoreWrap');if(wrap)wrap.style.display=matches.length>visibleCount?'block':'none';
  const btn=$('loadMoreBtn');if(btn)btn.textContent=`আরও কেক দেখুন (${bn(Math.max(0,matches.length-visibleCount))}টি) ↓`;
}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');activeFilter=b.dataset.filter;visibleCount=PAGE_SIZE;applyFilters();
}));
const searchInput=$('cakeSearch');
if(searchInput)searchInput.addEventListener('input',()=>{visibleCount=PAGE_SIZE;applyFilters();});
const loadMoreButton=$('loadMoreBtn');
if(loadMoreButton)loadMoreButton.addEventListener('click',()=>{visibleCount+=PAGE_SIZE;applyFilters();});

// ===== কেকের বিস্তারিত (মডাল) ও WhatsApp অর্ডার =====
function cakeShareUrl(p){
  const base=/^https?:$/.test(location.protocol)?location.origin+location.pathname:SITE_URL;
  return `${base}#cake=${encodeURIComponent(p.id)}`;
}
function openCake(id,fromDeepLink=false){
 const p=PRODUCTS.find(x=>x.id===id);if(!p||!isVisibleProduct(p))return;
 currentCakeId=p.id;
 const available=isAvailable(p),price=fixedPrice(p);
 const img=$('modalCakeImg');if(img){img.src=p.image;img.alt=p.name;}
 const nameEl=$('modalCakeName');if(nameEl)nameEl.textContent=p.name;
 const descEl=$('modalCakeDesc');if(descEl)descEl.textContent=p.description;
 const priceEl=$('modalCakePrice');
 if(priceEl){
   priceEl.textContent=available?(price||priceFallbackText()):'Not Available';
   priceEl.classList.toggle('unavailable-text',!available);
   priceEl.style.display='';
 }
 const order=$('modalOrder');
 if(order){
   if(available){
     const url=cakeShareUrl(p);
     const msg=`আসসালামু আলাইকুম।\nআমি আপনাদের “${p.name}” ডিজাইনটি পছন্দ করেছি। এই কেকটির ১ পাউন্ডের দাম, সাইজ/ওজন ও ফ্লেভারের বিস্তারিত জানাবেন?\n\nনির্দিষ্ট কেকের লিংক: ${url}\n\nধন্যবাদ। ❤️`;
     order.href=WA+'?text='+encodeURIComponent(msg);order.style.display='';
   }else{order.removeAttribute('href');order.style.display='none';}
 }
 const modal=$('cakeModal');if(modal)modal.classList.add('show');
 if(!fromDeepLink)history.replaceState(null,'',location.pathname+location.search+'#cake='+encodeURIComponent(p.id));
}
function closeModal(id){
  const el=$(id);if(el)el.classList.remove('show');
  if(id==='cakeModal'){
    currentCakeId=null;
    if(location.hash.startsWith('#cake='))history.replaceState(null,'',location.pathname+location.search);
  }
}
// Sheet-এর নতুন তথ্য আসার পর খোলা মডালের দাম/অর্ডার বাটন হালনাগাদ করে
function refreshOpenModal(){
  const modal=$('cakeModal');
  if(!currentCakeId||!modal||!modal.classList.contains('show'))return;
  const p=PRODUCTS.find(x=>x.id===currentCakeId);
  if(!p||!isVisibleProduct(p)){closeModal('cakeModal');return;}
  openCake(currentCakeId,true);
}

// ===== কাস্টমার রিভিউ গ্যালারি ও ক্লিক/কিবোর্ড/স্বাইপ হ্যান্ডলার (অপরিবর্তিত) =====
function reviewImages(){return Array.from(document.querySelectorAll('.review-img'));}let currentReviewIndex=0,reviewTouchStartX=0;
function showReview(index){const imgs=reviewImages();if(!imgs.length)return;currentReviewIndex=(index+imgs.length)%imgs.length;const source=imgs[currentReviewIndex],big=document.getElementById('lightboxImg');big.src=source.src;big.alt=source.alt||`কাস্টমার রিভিউ ${currentReviewIndex+1}`;document.getElementById('reviewCounter').textContent=`${bn(currentReviewIndex+1)} / ${bn(imgs.length)}`;document.getElementById('lightbox').classList.add('show');}
document.addEventListener('click',e=>{const opener=e.target.closest('[data-open]');if(opener){openCake(opener.dataset.open);return;}const closer=e.target.closest('[data-close]');if(closer){closeModal(closer.dataset.close);return;}const nav=e.target.closest('[data-review-nav]');if(nav){showReview(currentReviewIndex+(nav.dataset.reviewNav==='next'?1:-1));return;}const review=e.target.closest('.review-shot');if(review){showReview(reviewImages().indexOf(review.querySelector('.review-img')));}});
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.show').forEach(m=>closeModal(m.id));if(document.getElementById('lightbox').classList.contains('show')){if(e.key==='ArrowRight')showReview(currentReviewIndex+1);if(e.key==='ArrowLeft')showReview(currentReviewIndex-1);}});
const lightbox=document.getElementById('lightbox');lightbox.addEventListener('touchstart',e=>{reviewTouchStartX=e.changedTouches[0].screenX;},{passive:true});lightbox.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-reviewTouchStartX;if(Math.abs(dx)>45)showReview(currentReviewIndex+(dx<0?1:-1));},{passive:true});

// ===== Google Sheet থেকে দাম, availability ও status =====
// API-র গঠন: {"products":[{id,name,category,price,availability,status?}, ...]}
// (পুরোনো ধরনের সরাসরি array হলেও কাজ করবে)
function extractRows(data){
  if(Array.isArray(data))return data;
  if(data&&typeof data==='object'){
    for(const k of ['products','data','rows','items']){if(Array.isArray(data[k]))return data[k];}
  }
  return null;
}
// শুধু id ধরে price / availability / status মেলানো হয়; ছবি, নাম, ক্যাটাগরি, বিবরণ script.js-এর ডেটাই থাকে
function mergeSheetRows(rows){
  const key=v=>String(v??'').trim().toLowerCase();
  const byId=new Map();
  rows.forEach(r=>{if(r&&has(r.id))byId.set(key(r.id),r);});
  PRODUCTS.forEach(p=>{
    const r=byId.get(key(p.id));
    p._missing=!r;
    if(!r)return;
    if(r.price!==undefined&&r.price!==null)p.price=r.price;
    p.availability=has(r.availability)?r.availability:p._baseAvailability;
    p.status=has(r.status)?r.status:p._baseStatus;
  });
}
function applySheetPrices(payload){
  const rows=extractRows(payload);
  if(!rows||!rows.length){
    console.warn('Google Sheet API থেকে "products" তালিকা পাওয়া যায়নি:',payload);
    return false;
  }
  mergeSheetRows(rows);
  sheetState='ready';
  lastSheetLoad=Date.now();
  saveSheetCache(rows);
  renderProducts(true);
  refreshOpenModal();
  return true;
}
function saveSheetCache(rows){
  try{
    const slim=rows.filter(r=>r&&has(r.id)).map(r=>({id:r.id,price:r.price,availability:r.availability,status:r.status}));
    localStorage.setItem(SHEET_CACHE_KEY,JSON.stringify({t:Date.now(),rows:slim}));
  }catch(e){}
}
// আগের বার সফলভাবে পাওয়া তথ্য সঙ্গে সঙ্গে দেখায়, যাতে API আসার আগে "দাম নেই" জাতীয় ঝলক না দেখা যায়
function loadSheetCache(){
  try{
    const c=JSON.parse(localStorage.getItem(SHEET_CACHE_KEY)||'null');
    if(c&&Array.isArray(c.rows)&&c.rows.length){mergeSheetRows(c.rows);sheetState='ready';return true;}
  }catch(e){}
  return false;
}
function sheetUrl(){
  return SHEET_API_URL+(SHEET_API_URL.includes('?')?'&':'?')+'_='+Date.now();
}
// পদ্ধতি ১: fetch (Apps Script "Anyone" অ্যাক্সেসে CORS সহ কাজ করে)
function fetchSheetJson(){
  if(typeof fetch!=='function')return Promise.reject(new Error('fetch সমর্থিত নয়'));
  const ctrl=typeof AbortController==='function'?new AbortController():null;
  const timer=ctrl?setTimeout(()=>ctrl.abort(),SHEET_TIMEOUT_MS):null;
  return fetch(sheetUrl(),{cache:'no-store',redirect:'follow',signal:ctrl?ctrl.signal:undefined})
    .then(res=>{if(!res.ok)throw new Error('HTTP '+res.status);return res.text();})
    .then(text=>{
      clearTimeout(timer);
      // কখনো JSONP মোড়কে এলেও পড়া যাবে: callback({...});
      const body=text.trim().replace(/^[\w$.]+\(([\s\S]*)\);?$/,'$1');
      return JSON.parse(body);
    })
    .catch(err=>{clearTimeout(timer);throw err;});
}
// পদ্ধতি ২ (ব্যাকআপ): JSONP — Apps Script-এ ?callback=... সমর্থিত থাকলে কাজ করবে
let jsonpResolve=null;
window.receiveCakePrices=function(payload){
  const ok=applySheetPrices(payload);
  if(jsonpResolve)jsonpResolve(ok);
  return ok;
};
function loadSheetJsonp(){
  return new Promise(resolve=>{
    const s=document.createElement('script');
    let done=false,timer=null;
    const finish=ok=>{
      if(done)return;done=true;clearTimeout(timer);jsonpResolve=null;
      if(s.parentNode)s.parentNode.removeChild(s);
      resolve(ok);
    };
    jsonpResolve=finish;
    timer=setTimeout(()=>finish(false),SHEET_TIMEOUT_MS);
    s.src=sheetUrl()+'&callback=receiveCakePrices';
    s.async=true;
    s.onerror=()=>finish(false);
    s.onload=()=>finish(false); // callback আগে চললে done=true থাকায় এটি কিছু করবে না
    document.head.appendChild(s);
  });
}
function loadSheetPrices(){
  if(!SHEET_API_URL||sheetLoading)return Promise.resolve(false);
  sheetLoading=true;
  return fetchSheetJson()
    .then(data=>{if(!applySheetPrices(data))throw new Error('products তালিকা নেই');return true;})
    .catch(err=>{console.warn('Sheet fetch ব্যর্থ, JSONP চেষ্টা করা হচ্ছে:',err&&err.message?err.message:err);return loadSheetJsonp();})
    .then(ok=>{
      sheetLoading=false;
      if(!ok){
        console.warn('Google Sheet থেকে তথ্য আনা যায়নি। Apps Script Deploy-এ "Who has access: Anyone" এবং সর্বশেষ New version ঠিক আছে কিনা দেখুন।');
        if(sheetState==='loading'){sheetState='failed';renderProducts(true);}
      }
      return ok;
    });
}
// ট্যাবে ফিরে এলে (২ মিনিটের বেশি পর) দাম আবার হালনাগাদ হবে
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible'&&Date.now()-lastSheetLoad>SHEET_REFRESH_AFTER_MS)loadSheetPrices();
});

// ===== শুরু =====
PRODUCTS.forEach(p=>{p._baseStatus=p.status;p._baseAvailability=p.availability||'Available';});
loadSheetCache();
renderProducts();
loadSheetPrices();
if(location.hash.startsWith('#cake=')){
  try{openCake(decodeURIComponent(location.hash.slice(6)),true);}catch(e){console.warn('কেকের লিংক পড়া যায়নি',e);}
}
