import { Image, View, StyleSheet } from "react-native";

import Text from "./Text";
import { Repository } from "./Types";
import theme from "../theme";

const styles = StyleSheet.create({
  repoItem: {
    backgroundColor: "white",
    padding: 10,
  },
  repoTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  repoInfoViews: {
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 30,
  },
  description: {},
  languageTag: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 5,
  },
  repoStats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  repoStat: {
    alignItems: "center",
  },
});

type RepositoryItemProps = {
  repo: Repository;
};

type AvatarProps = {
  uri: string;
};

const Avatar = ({ uri }: AvatarProps) => {
  return (
    <View>
      <Image source={{ uri }} style={styles.avatar} />
    </View>
  );
};

type LanguageTagProps = {
  language: string;
};

const LanguageTag = ({ language }: LanguageTagProps) => {
  const languageStyles = [styles.languageTag, styles.repoInfoViews];
  return (
    <View style={languageStyles}>
      <Text fontSize="subheading" color="darkBackground">
        {language}
      </Text>
    </View>
  );
};

type RepoNameViewProps = {
  name: string;
};

const RepoNameView = ({ name }: RepoNameViewProps) => {
  return (
    <View style={styles.repoInfoViews}>
      <Text fontSize="subheading" fontWeight="bold">
        {name}
      </Text>
    </View>
  );
};

type RepoDescViewProps = {
  description: string;
};

const RepoDescView = ({ description }: RepoDescViewProps) => {
  return (
    <View style={styles.repoInfoViews}>
      <Text>{description}</Text>
    </View>
  );
};

type RepositoryInfoProps = {
  name: string;
  description: string;
  language: string;
};

const RepositoryInfo = ({
  name,
  description,
  language,
}: RepositoryInfoProps) => {
  return (
    <View style={{ flexShrink: 1 }}>
      <RepoNameView name={name} />
      <RepoDescView description={description} />
      <LanguageTag language={language} />
    </View>
  );
};

type RepositoryStatProps = {
  statName: string;
  statValue: number;
};

const RepositoryStat = ({ statName, statValue }: RepositoryStatProps) => {
  return (
    <View style={styles.repoStat}>
      <View>
        <Text fontWeight="bold">{statValue}</Text>
      </View>
      <View>
        <Text color="textSecondary">{statName}</Text>
      </View>
    </View>
  );
};

type RepositoryTitleProps = {
  name: string;
  uri: string;
  description: string;
  language: string;
};

const RepositoryTitle = ({
  name,
  uri,
  description,
  language,
}: RepositoryTitleProps) => {
  return (
    <View style={styles.repoTitle}>
      <Avatar uri={uri} />
      <RepositoryInfo
        name={name}
        description={description}
        language={language}
      />
    </View>
  );
};

type RepositoryStatsProps = {
  stars: number;
  forks: number;
  reviews: number;
  rating: number;
};

const RepositoryStats = ({
  stars,
  forks,
  reviews,
  rating,
}: RepositoryStatsProps) => {
  return (
    <View style={styles.repoStats}>
      <RepositoryStat statName="stars" statValue={stars} />
      <RepositoryStat statName="forks" statValue={forks} />
      <RepositoryStat statName="reviews" statValue={reviews} />
      <RepositoryStat statName="rating" statValue={rating} />
    </View>
  );
};

const RepositoryItem = ({ repo }: RepositoryItemProps) => {
  return (
    <View style={styles.repoItem}>
      <RepositoryTitle
        name={repo.fullName}
        uri={repo.ownerAvatarUrl}
        description={repo.description}
        language={repo.language}
      />
      <RepositoryStats
        stars={repo.stargazersCount}
        forks={repo.forksCount}
        reviews={repo.reviewCount}
        rating={repo.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
