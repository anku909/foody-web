const partnerOnBoarding = [
  {
    id: 1,
    title: "I want to partner my restaurant with Swiggy",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    hyperLinkText: "Partner with us",
    hyperLink: "https://www.swiggy.com/partner-with-us/",
  },
  {
    id: 2,
    title:
      "What are the mandatory documents needed to list my restaurant on Swiggy?",
    description:
      "-Copies of the below documents are mandatory\n-FSSAI Licence OR FSSAI Acknowledgement\n-  Pan Card\n-  GSTIN Certificate\n-  Cancelled Cheque OR bank Passbook\n-  Menu",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 3,
    title: "I want to opt-out from Google reserve",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: false,
    options: [],
    hyperLinkText: "Send an email",
    hyperLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe6flk-RRljUCRCsCVnHIyUXxjs8CuYTSGwRHjhzGMNA27gnw/viewform",
  },
  {
    id: 4,
    title:
      "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
    description:
      "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 4,
    title:
      "What is this one time Onboarding fees? Do I have to pay for it while registering?",
    description:
      "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 5,
    title:
      "Who should I contact if I need help & support in getting onboarded?",
    description:
      "You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "partnersupport@swiggy.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 6,
    title: "How much commission will I be charged by Swiggy?",
    description:
      "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 7,
    title:
      "I don't have an FSSAI licence for my restaurant. Can it still be onboarded?",
    description:
      "FSSAI licence is a mandatory requirement according to the government's policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
];

const faqs = [
  {
    id: 1,
    title: "What is Swiggy Customer Care Number?",
    description:
      "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in\n\nNote: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "support@swiggy.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 494,
    title: "I want to explore career opportunities with Swiggy",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "careers@swiggy.in",
      },
    ],
    hyperLinkText: "Join our team",
    hyperLink: "https://www.swiggy.com/careers?hide_header=ios_android",
  },
  {
    id: 495,
    title: "I want to provide feedback",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "support@swiggy.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 475,
    title: "Will Swiggy be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 480,
    title: "Can I order from any location?",
    description:
      "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 482,
    title: "Do you support bulk orders?",
    description:
      "In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 483,
    title: "Can I order in advance?",
    description:
      "We currently do not support this functionality. All our orders are placed and executed on-demand.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 484,
    title: "Can I change the address / number?",
    description:
      "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 485,
    title: "Did not receive OTP?",
    description:
      "Please check if your app is due for an update. If not, please share the details via support@swiggy.in",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 486,
    title: "Did not receive referral coupon?",
    description:
      "Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@swiggy.in. We will contact you within 48 hours.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 487,
    title: "Deactivate my account",
    description:
      "Please write to us at support@swiggy.in in the event that you want to deactivate your account.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 488,
    title: "Unable to view the details in my profile",
    description:
      "Please check if your app is due for an update. If not, please share the details via support@swiggy.in",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 489,
    title: "What is Swiggy Money?",
    description:
      "Swiggy Money is a secure digital wallet where you can store digital currency and use it for faster check outs. It prevents payment failures and gives you seamless refunds when necessary.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 490,
    title: "Do you accept Sodexo, Ticket Restaurant etc.?",
    description:
      "We do not accept Sodexo vouchers but we do accept Sodexo card. You can select the Sodexo card option while selecting payment options at the time of order",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 491,
    title: "I want an invoice for my order",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "support@swiggy.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
];

export { partnerOnBoarding, faqs };
