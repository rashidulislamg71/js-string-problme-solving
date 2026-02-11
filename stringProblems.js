// ১. স্ট্রিং ট্রাঙ্কেট করা (Content Preview Task)
// অনেক সময় ব্লগের টাইটেল বা ডেসক্রিপশন অনেক বড় হয়, যা কার্ডের ভেতর ধরে না। তখন আমাদের সেটা ছোট করে শেষে তিনটি ডট (...) দিতে হয়। const description = "JavaScript is a versatile language that powers the web.";

// কাজ: একটি ফাংশন লেখো যা ২০টি অক্ষরের বেশি হলে স্ট্রিংটিকে কেটে ছোট করবে এবং শেষে ... যোগ করবে। আর ২০ অক্ষরের কম হলে যা আছে তাই দেখাবে।

const description = "JavaScript is a versatile language that powers the web.";
function truncateString(str) {
  if (str.length > 30) {
    return str.slice(0, 30) + "...";
  }
  return str;
}
// console.log(truncateString(description));

// ২. ক্রেডিট কার্ড মাস্কিং (Security Task)
// ব্যাংকিং অ্যাপে সিকিউরিটির জন্য কার্ডের মাঝখানের নাম্বারগুলো দেখানো হয় না। const cardNumber = "1234567890123456";

// কাজ: স্ট্রিং মেথড ব্যবহার করে কার্ডের প্রথম ৪টি এবং শেষ ৪টি ডিজিট ঠিক রেখে মাঝখানের ৮টি ডিজিটকে * দিয়ে রিপ্লেস করো। আউটপুট হবে: 1234********3456

const cardNumber = "1234567890123456";
function maskCardNumber(number) {
  const firstFour = number.slice(0, 4);
  const lastFour = number.slice(-4);
  const maskedPart = "*".repeat(8);
  const result = firstFour + maskedPart + lastFour;
  return result;
}

// console.log(maskCardNumber(cardNumber));

// ৩. প্যালিনড্রোম চেক (Logic Challenge)
// প্যালিনড্রোম মানে হলো এমন একটি শব্দ যা সোজা দিক থেকে এবং উল্টো দিক থেকে পড়লে একই হয় (যেমন: "madam", "racecar")।

// কাজ: একটি ফাংশন লেখো যা চেক করবে একটি স্ট্রিং প্যালিনড্রোম কি না। যদি হয় তবে true আর না হলে false রিটার্ন করবে। 

const word = "madam";
function isPalindrome(str){
    if(typeof str !== "string"){
        return "Please provide a valid string.";
    }
    const x = str.toLowerCase().split("").reverse();
    const y = str.toLowerCase().split("")
    if(x.join("") === y.join("")){
        return true;
    }
    return false;
}

isPalindrome(word)


// ৪. স্পেস কাউন্টার (Word Count Challenge)
// ইউজাররা যখন কোনো প্যারাগ্রাফ লেখে, আমাদের চেক করতে হয় সেখানে কয়টি শব্দ আছে। const bio = "I am a web developer and instructor.";

// কাজ: একটি ফাংশন লেখো যা স্ট্রিংটি থেকে মোট কয়টি শব্দ (Word) আছে তা গুনে বের করবে। 

const bio = "I am a web developer and instructor.";
function countString(str){
  const count = str.split("").length
  console.log(count)
  const c = str.length;
  console.log(c)
}
countString(bio)