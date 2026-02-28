# logging_utils.py
import os, json, time, uuid
import boto3

S3_BUCKET = os.getenv("LOG_S3_BUCKET")  # optional
s3 = boto3.client("s3") if S3_BUCKET else None

def log_interaction(user, route, req_payload, resp_payload, meta=None):
    rec = {
        "id": str(uuid.uuid4()),
        "ts": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "user_sub": user.get("sub"),
        "user_email": user.get("email"),
        "route": route,
        "request": req_payload,     # prompt, params, etc.
        "response": resp_payload,   # model output, citations, etc.
        "meta": meta or {},         # latency, model, tokens
    }
    line = json.dumps(rec, ensure_ascii=False)
    print(line, flush=True)  # goes to CloudWatch via stdout

    if s3:
        day = rec["ts"][:10]
        key = f"logs/{day}/{rec['id']}.json"
        s3.put_object(Bucket=S3_BUCKET, Key=key, Body=line.encode("utf-8"))
