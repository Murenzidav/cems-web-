export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

/**
 * Add people here to show a team grid on the About page.
 * Leave this array empty to hide the section.
 */
export const team: TeamMember[] = [];
