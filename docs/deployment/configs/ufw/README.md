# UFW Configuration

## Production Rules

```bash
sudo ufw allow 22/tcp

sudo ufw allow 80/tcp

sudo ufw allow 443/tcp

sudo ufw enable
```

---

## Verification

```bash
sudo ufw status verbose
```

Expected:

```
22/tcp

80/tcp

443/tcp
```