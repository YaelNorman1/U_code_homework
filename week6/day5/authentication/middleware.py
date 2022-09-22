# Takes a string that will look like 'Bearer eyJhbGc...'
def verify_authorization_header(auth_header: str) -> Tuple[List[str], BaseUser]: # Returns a Tuple of a List of scopes (string) and a BaseUser
    user = FastAPIUser(first_name="Code", last_name="Specialist", user_id=1)  # Usually you would decode the JWT here and verify its signature to extract the 'sub'
    scopes = []  # You could for instance use the scopes provided in the JWT or request them by looking up the scopes with the 'sub' somewhere
    return scopes, user