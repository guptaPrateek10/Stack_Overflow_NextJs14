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

export const QuestionFiltersConstents = {
  MOST_RECENT: "most_recent",
  OLDEST: "oldest",
  MOST_VOTED: "most_voted",
  MOST_VIEWED: "most_viewed",
  MOST_ANSWERED: "most_answered",
};
export const QuestionFilters = [
  { name: "Most Recent", value: QuestionFiltersConstents.MOST_RECENT },
  { name: "Oldest", value: QuestionFiltersConstents.OLDEST },
  { name: "Most Voted", value: QuestionFiltersConstents.MOST_VOTED },
  { name: "Most Viewed", value: QuestionFiltersConstents.MOST_VIEWED },
  { name: "Most Answered", value: QuestionFiltersConstents.MOST_ANSWERED },
];

export const TagFiltersConstants = {
  POPULAR: "popular",
  RECENT: "recent",
  NAME: "name",
  OLD: "old",
};

export const TagFilters = [
  { name: "Popular", value: TagFiltersConstants.POPULAR },
  { name: "Recent", value: TagFiltersConstants.RECENT },
  { name: "Name", value: TagFiltersConstants.NAME },
  { name: "Old", value: TagFiltersConstants.OLD },
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
