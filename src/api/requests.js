const requests = {
  fetchMain: `/kinders`,
  fetchDetail: `/kinder/${ID}`,
  fetchHome: `/home?${ID}`,
  fetchNotifications: `/notifications`,
  fetchNotification: `/notification/${ID}?${KINDER_ID}`,
};

export default requests;
