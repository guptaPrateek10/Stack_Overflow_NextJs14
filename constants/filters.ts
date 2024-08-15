export const AnswerFilters = [
  { name: "Highest Upvotes", value: "highestUpvotes" },
  { name: "Lowest Upvotes", value: "lowestUpvotes" },
  { name: "Most Recent", value: "recent" },
  { name: "Oldest", value: "old" },
];

export const UserFiltersConstants = {
  NEW_USER: "new_users",
  OLD_USER: "old_users",
  TOP_CONTRIBUTOR: "top_contributors",
};
export const UserFilters = [
  { name: "New Users", value: UserFiltersConstants.NEW_USER },
  { name: "Old Users", value: UserFiltersConstants.OLD_USER },
  { name: "Top Contributors", value: UserFiltersConstants.TOP_CONTRIBUTOR },
];

export const QuestionFilters = [
  { name: "Most Recent", value: "most_recent" },
  { name: "Oldest", value: "oldest" },
  { name: "Most Voted", value: "most_voted" },
  { name: "Most Viewed", value: "most_viewed" },
  { name: "Most Answered", value: "most_answered" },
];

export const TagFilters = [
  { name: "Popular", value: "popular" },
  { name: "Recent", value: "recent" },
  { name: "Name", value: "name" },
  { name: "Old", value: "old" },
];

export const HomePageFiltersConstents = {
  NEWEST: "newest",
  RECOMMENDED: "recommended",
  FREQUENT: "frequent",
  UNANSWERED: "unanswered",
};

export const HomePageFilters = [
  { name: "Newest", value: HomePageFiltersConstents.NEWEST },
  { name: "Recommended", value: HomePageFiltersConstents.RECOMMENDED },
  { name: "Frequent", value: HomePageFiltersConstents.FREQUENT },
  { name: "Unanswered", value: HomePageFiltersConstents.UNANSWERED },
];

export const GlobalSearchFilters = [
  { name: "Question", value: "question" },
  { name: "Answer", value: "answer" },
  { name: "User", value: "user" },
  { name: "Tag", value: "tag" },
];
